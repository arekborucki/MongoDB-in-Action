# Chapter 8 – Executing Multi-Document ACID Transactions

This directory contains examples and code samples from **Chapter 8** of _MongoDB 8.0 in Action_.  
It focuses on how MongoDB supports **multi-document ACID transactions**, and how to implement them using JavaScript (mongosh & Node.js), Python, and Ruby.

---

## 📚 What You'll Learn

- How the **WiredTiger storage engine** enables ACID-compliant transactions
- The role of **snapshots**, **journaling**, **compression**, and **memory management**
- MongoDB's **single-document atomicity** and **multi-document transaction support**
- Understanding and applying **ACID principles** in MongoDB
- The differences between the **Core API** and **Callback API** for transactions
- Running transactions using:
  - `mongosh` (manual session and transaction control)
  - **Node.js** MongoDB Driver with Callback API
  - **Python** (`pymongo`) with Callback API
  - **Ruby** (`mongo` gem) with Callback API
- Key design and performance considerations when using transactions in MongoDB

---

## 📁 Files Included

| File name               | Description |
|-------------------------|-------------|
| `mongoshTransaction.js` | Demonstrates a manual multi-document transaction using `mongosh`, including retry logic. |
| `transaction.js`        | Node.js script using the **Callback API** to manage multi-document transactions. |
| `transaction.py`        | Python script using `pymongo` and the **Callback API** to execute ACID transactions. |
| `transaction_script.rb` | Ruby script using the `mongo` gem and **Callback API** for a multi-collection transaction. |

---

## 🧠 Tips & Best Practices

- Prefer the **Callback API** for its built-in retry and error handling.
- Use **denormalized schemas** when possible to avoid needing transactions.
- Ensure all operations in a transaction use **indexes** to avoid slow performance.
- Limit transactions to **1,000 modified documents** for optimal performance.
- Avoid creating collections/indexes inside transactions (especially in sharded clusters).
- Split large or long-running transactions into smaller steps to avoid timeouts.

---

## ✅ Requirements

- **MongoDB 8.0+**
- **mongosh**, **Node.js**, **Python 3**, or **Ruby**
- Sample dataset: `sample_analytics`
- Required drivers:
  - Node.js: `npm install mongodb`
  - Python: `pip install pymongo==4.7.3`
  - Ruby: `gem install mongo`
