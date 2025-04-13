"""
Multi-document transaction using pymongo and Callback API

This script connects to MongoDB using pymongo and executes a transaction across the
'accounts', 'customers', and 'transactions' collections using the callback API. All operations
are performed in a single session and the transaction is retried automatically in case
of transient errors. The script ensures ACID compliance for multiple write operations.

Usage:
    python3 transaction.py <account_id>
Example:
    python3 transaction.py 785786
"""

from pymongo import MongoClient, WriteConcern, ReadPreference
from pymongo.read_concern import ReadConcern
from datetime import datetime
import sys

uri = "your_mongodb_connection_string"

def callback(session, accountId):
    accounts = session.client.sample_analytics.accounts
    customers = session.client.sample_analytics.customers
    transactions = session.client.sample_analytics.transactions
    now = datetime.now()

    account = accounts.find_one({ "account_id": int(accountId) }, session=session)
    if not account:
        raise Exception("Account not found")

    accounts.update_one(
        { "account_id": int(accountId) },
        {
            "$set": { "limit": 12000, "last_transaction_date": now },
            "$inc": { "transaction_count": 1 }
        },
        session=session
    )

    customers.update_many(
        { "accounts": { "$in": [int(accountId)] } },
        {
            "$set": { "last_transaction_date": now },
            "$inc": { "transaction_count": 1 }
        },
        session=session
    )

    transactions.insert_one({
        "account_id": int(accountId),
        "transaction_count": account.get("transaction_count", 0) + 1,
        "bucket_start_date": now,
        "bucket_end_date": now,
        "transactions": [{
            "date": now,
            "amount": 1500,
            "transaction_code": "buy",
            "symbol": "amzn",
            "price": "125.00",
            "total": "187500.00"
        }]
    }, session=session)

def run(accountId):
    client = MongoClient(uri)
    with client.start_session() as session:
        session.with_transaction(
            lambda s: callback(s, accountId),
            read_concern=ReadConcern("local"),
            write_concern=WriteConcern("majority"),
            read_preference=ReadPreference.PRIMARY
        )
    client.close()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 transaction.py <account_id>")
        sys.exit(1)
    run(sys.argv[1])
