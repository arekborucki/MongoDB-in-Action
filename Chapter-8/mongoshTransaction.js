/**
 * Multi-document transaction using mongosh
 *
 * This script manually executes a multi-document ACID transaction in MongoDB using the `mongosh` shell.
 * It performs read and write operations across multiple collections (`accounts`, `customers`, and `transactions`)
 * in the `sample_analytics` database. The transaction is retried up to 5 times if it fails due to
 * transient errors (e.g. TransientTransactionError, UnknownTransactionCommitResult).
 *
 * Usage:
 *   Paste this code into mongosh or run it part-by-part to observe each step.
 */

function executeTransaction(session) {
  const dbSampleAnalytics = session.getDatabase('sample_analytics')

  session.startTransaction({
    readConcern: { level: 'snapshot' },
    writeConcern: { w: 'majority' },
    readPreference: 'primary'
  })

  try {
    const account = dbSampleAnalytics.accounts.findOne({ account_id: 371138 })
    if (!account) throw new Error('Account not found')

    const newTransactionCount = (account.transaction_count || 0) + 1

    dbSampleAnalytics.accounts.updateOne(
      { account_id: 371138 },
      {
        $set: { limit: 12000, last_transaction_date: new Date() },
        $inc: { transaction_count: 1 }
      }
    )

    dbSampleAnalytics.customers.updateMany(
      { accounts: { $in: [371138] } },
      {
        $inc: { transaction_count: 1 },
        $set: { last_transaction_date: new Date() }
      }
    )

    dbSampleAnalytics.transactions.insertOne({
      account_id: 371138,
      transaction_count: newTransactionCount,
      date: new Date(),
      amount: 1500,
      transaction_code: 'buy'
    })

    session.commitTransaction()
  } catch (error) {
    session.abortTransaction()
    throw error
  }
}

function runTransactionWithRetry() {
  const maxRetries = 5
  let session
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    session = db.getMongo().startSession()
    try {
      executeTransaction(session)
      return
    } catch (error) {
      print("Attempt " + attempt + ": an error occurred", error)
      if (error.hasOwnProperty('errorLabels') &&
          (error.errorLabels.includes('TransientTransactionError') ||
           error.errorLabels.includes('UnknownTransactionCommitResult'))) {
        continue
      }
      throw error
    } finally {
      session.endSession()
    }
  }
  throw new Error('Max retries reached. Transaction failed.')
}

try {
  runTransactionWithRetry()
} catch (error) {
  throw new Error('Transaction failed after retries: ' + error.message)
}
