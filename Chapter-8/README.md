# Chapter 8 – Executing Multi-Document ACID Transactions

This directory contains examples and code samples from **Chapter 8** of _MongoDB 8.0 in Action_.  
It demonstrates how MongoDB supports **multi-document ACID transactions** and how to implement them using `mongosh`, Node.js, Python, and Ruby.

---

## 🔄 What You'll Learn

- How the **WiredTiger storage engine** supports transactional behavior
- Built-in atomicity of **single-document operations**
- How to perform **multi-document ACID transactions** across collections
- The difference between **Core API** and **Callback API**
- How to execute transactions using:
  - `mongosh` (manual control with retry logic)
  - Node.js driver with `withTransaction`
  - Python `pymongo` with callback-style transactions
  - Ruby driver with callback-style transaction block
- Transaction best practices, limitations, and performance considerations

---

## 📁 Files Included

| File name               | Description |
|-------------------------|-------------|
| `mongoshTransaction.js` | Manual multi-document transaction in `mongosh`, including retry logic and session control. |
| `transaction.js`        | Node.js script using the MongoDB Driver's Callback API to update multiple collections in a single transaction. |
| `transaction.py`        | Python script using `pymongo` and Callback API for executing multi-document ACID transactions. |
| `transaction_script.rb` | Ruby script using the `mongo` gem and transaction block to modify multiple collections atomically. |

---

## ✅ Requirements

- **MongoDB 8.0+**
- Sample dataset: `sample_analytics`
- Tools:
  - `mongosh` shell
  - Node.js + `mongodb` driver (`npm install mongodb`)
  - Python 3 + `pymongo` (`pip install pymongo==4.7.3`)
  - Ruby + `mongo` gem (`gem install mongo`)

---
