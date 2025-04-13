# Chapter 17 – Archiving Online with Atlas Online Archive

This directory contains examples and scripts from **Chapter 17** of _MongoDB 8.0 in Action_.  
It demonstrates how to use **MongoDB Atlas Online Archive** to reduce storage costs by archiving infrequently accessed data, without losing the ability to query it.

---

## 📦 What You'll Learn

- How to **archive rarely accessed data** from Atlas to cost-efficient cloud storage
- Creating **archiving rules** based on data usage, retention, and timestamps
- Archiving from **standard** and **time series collections**
- Querying **live and archived data** through a unified federated database instance
- Using the **Atlas CLI** to configure and manage online archives
- Controlling query costs and understanding **federated billing metrics**
- **Restoring archived data** back to your live Atlas cluster using `$merge`

---

## 📁 Files Included

| File name                   | Description |
|-----------------------------|-------------|
| `createArchiveRule.sh`      | Uses Atlas CLI to create an Online Archive based on the `saleDate` field in the `sales` collection. |
| `archiveQuery.js`           | Sample query to identify documents older than 5 days based on `saleDate`. |
| `createIndex.js`            | Creates an index on `saleDate` to improve archiving performance. |
| `restoreFromArchive.js`     | Aggregation pipeline using `$merge` to restore archived documents back into a live collection. |
| `connectFederated.sh`       | Shell script to connect to the Federated Database instance using `mongosh`. |
| `connectArchiveOnly.sh`     | Shell script to connect specifically to the Online Archive instance. |
| `README.md`                 | Overview of Online Archive setup and usage from Chapter 17. |

---

## ✅ Requirements

- **MongoDB Atlas M10+ cluster**
- **Atlas CLI** installed and authenticated ([Install Guide](https://www.mongodb.com/docs/atlas/cli/stable/install/))
- `mongosh` for running shell-based queries
- `sample_supplies` dataset loaded into your Atlas cluster

---

## 💡 Key Concepts

- **Archiving Rules:** Define archiving behavior using a date field or custom query.
- **Indexing:** Required on archiving fields (e.g., `saleDate`) to avoid performance issues.
- **Archival Jobs:** Run every 5 minutes by default; skip execution if under 2GB of eligible data.
- **Storage Regions:** Choose from supported AWS and Azure regions for where archived data is stored.
- **Federated Access:** Query both live and archived data using a single federated endpoint.
- **Query Costs:** Charged by data scanned, partitions accessed, and data transferred.

---

## ⚠️ Important Notes

- The **Online Archive is read-only** and not a backup solution.
- Archives must be **paused** before you can restore data using `$merge`.
- Archiving from **capped collections** is not supported.
- Documents smaller than **5 MiB** after 7 days will not be archived.
- Online Archive consumes **cluster resources (IOPS)**, and may impact performance.

---

## 🔗 Additional Resources

- 📘 [MongoDB Online Archive Documentation](https://www.mongodb.com/docs/atlas/online-archive/)
- 🛠️ [Atlas CLI Reference – Online Archive](https://www.mongodb.com/docs/atlas/cli/stable/command/atlas-clusters-onlineArchive-create/)
- 🔒 [Atlas Online Archive Encryption (SSE-S3)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html)

---

> 💡 **Tip:** Use federated queries to access both live and archived data transparently from your app – saving costs while preserving historical insights.
