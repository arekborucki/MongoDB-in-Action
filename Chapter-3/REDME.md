# Chapter 3 – Communicating with MongoDB

This folder contains scripts and examples referenced in **Chapter 3** of *MongoDB 8.0 in Action*.  
It demonstrates various ways to communicate with MongoDB, from using the shell and GUI to programming with drivers in Node.js, Python, and Ruby.

## 🔍 What you'll learn

- How the MongoDB Wire Protocol works
- Customizing and configuring the MongoDB Shell (`mongosh`)
- Connecting to MongoDB via Compass GUI
- Writing scripts and running `.js` files in `mongosh`
- Connecting and querying MongoDB from:
  - Node.js using the official MongoDB driver
  - Python using `PyMongo` (sync) and `Motor` (async)
  - Ruby using the official Ruby driver

## 📁 Files included

| File                       | Description |
|----------------------------|-------------|
| `mongodb-script.js`        | Example script to print MongoDB version, uptime, and open connections. |
| `mongodb-pymongo.py`       | Python script using `pymongo` to query MongoDB synchronously. |
| `mongodb-motor.py`         | Python script using `motor` for asynchronous MongoDB access. |
| `mongodb-ruby.rb`          | Ruby script querying MongoDB using the official Ruby driver. |
| `index.js`                 | Node.js script to connect and query MongoDB using the official `mongodb` driver. |
| `.mongoshrc.js`            | Sample MongoDB Shell config to auto-switch databases and customize the prompt. |
| `connect.sh`               | Script to connect to your Atlas cluster using `mongosh`. Update with your connection string and credentials. |

> ℹ️ Tip: You can run scripts in `mongosh` using `--file`, e.g.  
> `mongosh "your-cluster-url" --username "your-username" --file mongodb-script.js`

---

Make sure to install required packages (`npm install`, `pip install pymongo motor`, `gem install mongo`) before running the language-specific scripts.
