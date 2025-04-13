# Chapter 8 – Executing Multi-document ACID Transactions

This directory contains examples and explanations from **Chapter 8** of *MongoDB 8.0 in Action*.  
It focuses on using **multi-document ACID transactions** with different drivers and shell environments.

---

## 🚀 What you'll learn

- How the WiredTiger storage engine enables ACID transactions
- Understanding snapshot isolation and journaling
- Writing transactions in:
  - **mongosh**
  - **Node.js**
  - **Python (PyMongo)**
  - **Ruby (mongo gem)**
- Using MongoDB’s callback API for simplified transaction management
- Best practices for modeling data and using transactions effectively
- How MongoDB handles optimistic concurrency and retries
- Transaction retry strategies for TransientTransactionError and UnknownTransactionCommitResult
- Limitations of transactions in sharded clusters
- When not to use transactions and how schema design can avoid them

---

## 📁 Files included

| File                       | Description |
|----------------------------|-------------|
| `mongoshTransaction.js`    | Manual transaction in `mongosh`, showing error handling and retry logic. |
| `nodeTransaction.js`       | Node.js example using the callback API for multi-document transaction. |
| `pythonTransaction.py`     | Python (PyMongo) example using the callback API with session management. |
| `rubyTransaction.rb`       | Ruby example with the callback API using the official MongoDB Ruby driver. |

---

## 💡 Tips

- Use **callback API** over core API – it automatically handles common errors and retries.
- Each transaction **must be bound to a logical session**.
- Transactions are most useful when updating **multiple documents or collections** that must be atomic.
- **Indexing** all queried fields inside a transaction is crucial for performance.
- Use transactions **only when needed** – prefer embedding for related data when possible.

---

## ✅ Requirements

- **MongoDB 8.0+**
- Sample dataset `sample_analytics` (from earlier chapters)
- MongoDB shell (`mongosh`) for manual execution
- Installed drivers:
  - Node.js: `npm install mongodb`
  - Python: `pip install pymongo`
  - Ruby: `gem install mongo`
- A valid **MongoDB Atlas URI** or connection string to replace in each script
