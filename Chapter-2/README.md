# Chapter 2 – Getting Started with Atlas and MongoDB Data

This directory contains code examples, shell scripts, and queries from **Chapter 2** of _MongoDB 8.0 in Action_.  
In this chapter, you'll learn how to launch your first MongoDB Atlas cluster, load sample datasets, connect using `mongosh`, and explore various types of collections including time series, capped collections, and views.

---

## 🔍 What You'll Learn

- How to install and configure the **Atlas CLI**
- Creating an **organization**, **project**, and a **free-tier Atlas cluster**
- Loading **sample data** into a cloud-hosted MongoDB instance
- Connecting securely to Atlas using **`mongosh`**
- Creating **database users** and managing **IP access control**
- Defining and querying **time series collections**
- Setting up **capped collections** for logging use cases
- Creating **views** to simplify complex queries

---

## 📁 Files Included

| File name                   | Description |
|-----------------------------|-------------|
| `connect.sh`                | Bash script to connect to your Atlas cluster using `mongosh`. Replace placeholders with your cluster connection string and user credentials. |
| `createUser.sh`             | Uses the Atlas CLI to create a new database user with `atlasAdmin` role. |
| `loadSampleData.sh`         | Loads MongoDB sample datasets into your Atlas cluster using the Atlas CLI. |
| `sampleQuery.js`            | A simple validation query run against the `sample_mflix.movies` collection. |
| `createTimeSeries.js`       | Creates a time series collection and inserts a sample document representing temperature data. |
| `createCappedCollection.js` | Defines a capped collection and inserts a sample log message. |
| `createView.js`             | Creates a read-only view (`aerocondorRoutesView`) on the `sample_training.routes` collection. |

---

## ✅ Requirements

- **MongoDB Atlas Account**
- **MongoDB CLI Tools**:
  - [Atlas CLI](https://www.mongodb.com/docs/atlas/cli/stable/install/)
  - `mongosh` (MongoDB Shell)
- Bash-compatible terminal (macOS, Linux, or Git Bash for Windows)

---

## 🧠 Tips

- Use the **free M0 cluster** for experimenting with MongoDB in the cloud.
- Don't forget to **add your IP address** to the IP Access List before connecting.
- Time series collections are optimized for **IoT and event-driven** data.
- Capped collections maintain a fixed size – perfect for logs and rolling data buffers.
- Views allow for **logical abstraction** without duplicating data.

---

## 📚 Additional Resources

- 🌐 [MongoDB Atlas Database – Product Overview](https://www.mongodb.com/products/platform/atlas-database)
