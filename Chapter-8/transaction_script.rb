# transaction_script.rb
# Multi-document transaction using Ruby MongoDB driver and Callback API
#
# This script demonstrates an ACID-compliant transaction in MongoDB using the official Ruby driver.
# The code updates an account, updates matching customers, and inserts a new transaction document,
# all in a single logical session and transaction block. The callback API simplifies retry and commit logic.
#
# Usage:
#   ruby transaction_script.rb <account_id>
# Example:
#   ruby transaction_script.rb 721914

require 'mongo'
require 'date'

uri = "your_mongodb_connection_string"

def transaction_callback(session, account_id)
  db = session.client.use('sample_analytics')
  accounts = db[:accounts]
  customers = db[:customers]
  transactions = db[:transactions]
  now = DateTime.now

  account = accounts.find({ "account_id" => account_id.to_i }, session: session).first
  raise 'Account not found' unless account

  account['transaction_count'] ||= 0

  accounts.update_one(
    { "account_id" => account_id.to_i },
    {
      "$set" => { "limit" => 12000, "last_transaction_date" => now },
      "$inc" => { "transaction_count" => 1 }
    },
    session: session
  )

  customers.update_many(
    { "accounts" => { "$in" => [account_id.to_i] } },
    {
      "$set" => { "last_transaction_date" => now },
      "$inc" => { "transaction_count" => 1 }
    },
    session: session
  )

  transactions.insert_one({
    "account_id" => account_id.to_i,
    "transaction_count" => account['transaction_count'] + 1,
    "bucket_start_date" => now,
    "bucket_end_date" => now,
    "transactions" => [{
      "date" => now,
      "amount" => 1500,
      "transaction_code" => "buy",
      "symbol" => "amzn",
      "price" => "125.00",
      "total" => "187500.00"
    }]
  }, session: session)

  puts "Transaction committed."
end

def run(uri, account_id)
  client = Mongo::Client.new(uri, write_concern: { w: :majority })
  session = client.start_session
  session.with_transaction(
    read_concern: { level: :snapshot },
    write_concern: { w: :majority },
    read: { mode: :primary }
  ) do |s|
    transaction_callback(s, account_id)
  end
ensure
  client.close
end

if ARGV.length < 1
  puts "Usage: ruby transaction_script.rb <account_id>"
  exit 1
end

run(uri, ARGV[0])
