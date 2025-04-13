// transaction.js
const { MongoClient } = require('mongodb')
const uri = "your_mongodb_connection_string"

async function run(accountId) {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const session = client.startSession()
    const transactionOptions = {
      readConcern: { level: 'snapshot' },
      writeConcern: { w: 'majority' },
      readPreference: 'primary'
    }

    session.startTransaction(transactionOptions)

    const db = client.db('sample_analytics')
    const accounts = db.collection('accounts')
    const customers = db.collection('customers')
    const transactions = db.collection('transactions')

    const currentDate = new Date()

    try {
      const account = await accounts.findOne({ account_id: parseInt(accountId) }, { session })
      if (!account) throw new Error('Account not found')

      await accounts.updateOne(
        { account_id: parseInt(accountId) },
        {
          $set: { limit: 12000, last_transaction_date: currentDate },
          $inc: { transaction_count: 1 }
        },
        { session }
      )

      await customers.updateMany(
        { accounts: { $in: [parseInt(accountId)] } },
        {
          $inc: { transaction_count: 1 },
          $set: { last_transaction_date: currentDate }
        },
        { session }
      )

      await transactions.insertOne({
        account_id: parseInt(accountId),
        transaction_count: account.transaction_count + 1,
        bucket_start_date: currentDate,
        bucket_end_date: currentDate,
        transactions: [{
          date: currentDate,
          amount: 1500,
          transaction_code: 'buy',
          symbol: 'amzn',
          price: '125.00',
          total: '187500.00'
        }]
      }, { session })

      await session.commitTransaction()
      console.log("Transaction committed.")
    } catch (error) {
      await session.abortTransaction()
      console.error("Transaction aborted:", error)
    } finally {
      session.endSession()
    }
  } catch (error) {
    console.error("MongoDB connection error:", error)
  } finally {
    await client.close()
  }
}

const accountId = process.argv[2]
if (!accountId) {
  console.error("Please provide an account ID.")
  process.exit(1)
}

run(accountId).catch(console.dir)
