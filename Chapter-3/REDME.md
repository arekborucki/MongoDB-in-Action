# Chapter 3 – Communicating with MongoDB

This directory contains scripts and examples from **Chapter 3** of _MongoDB 8.0 in Action_.  
It explores the different ways applications and developers interact with MongoDB – from the shell and GUI tools to language-specific drivers in JavaScript, Python, and Ruby.

---

## 🔍 What You'll Learn

- How the **MongoDB Wire Protocol** enables client-server communication
- Customizing the **MongoDB Shell (`mongosh`)** using `.mongoshrc.js`
- Connecting to MongoDB with the **Compass GUI**
- Writing and executing `.js` scripts directly in the MongoDB shell
- Connecting and querying MongoDB from popular programming languages:
  - **Node.js** using the official `mongodb` driver
  - **Python** using both `pymongo` (synchronous) and `motor` (asynchronous)
  - **Ruby** using the official MongoDB Ruby driver

---

## 📁 Files Included

| File name              | Description |
|------------------------|-------------|
| `mongodb-script.js`    | Runs in `mongosh` to display MongoDB version, uptime, and current connection count. |
| `mongodb-pymongo.py`   | Uses `pymongo` to connect and query MongoDB synchronously. |
| `mongodb-motor.py`     | Demonstrates asynchronous MongoDB access using the `motor` library. |
| `mongodb-ruby.rb`      | Connects to MongoDB and performs a query using the Ruby driver. |
| `index.js`             | Node.js script that connects to MongoDB and performs a sample query using the official `mongodb` package. |
| `.mongoshrc.js`        | Custom MongoDB Shell configuration to auto-select a default DB and modify the prompt. |
| `connect.sh`           | Bash script to connect to your Atlas cluster using `mongosh`. Replace with your credentials and cluster URI. |

---

## ✅ Requirements

- **MongoDB Atlas cluster** or local MongoDB instance
- Tools and libraries:
  - `mongosh` (MongoDB Shell)
  - [MongoDB Compass](https://www.mongodb.com/products/compass)
  - Node.js + `mongodb` (`npm install mongodb`)
  - Python 3 + `pymongo`, `motor` (`pip install pymongo motor`)
  - Ruby + `mongo` gem (`gem install mongo`)

---

## 💡 Tips

- Use `--file` with `mongosh` to run JavaScript scripts directly from the shell:  
  ```bash
  mongosh "your-cluster-url" --username "your-username" --file mongodb-script.js
