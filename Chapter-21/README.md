# Chapter 21 – Operational Excellence with MongoDB Atlas

This directory contains examples and CLI snippets from **Chapter 21** of _MongoDB 8.0 in Action_.  
It focuses on achieving operational reliability and performance using **MongoDB Atlas tools** such as backup, restore, monitoring, and alerting.

---

## 🚀 What You'll Learn

- How to configure and manage **Cloud Backups** (including point-in-time and snapshot-based)
- How to **restore** clusters using snapshots, timestamps, or to alternate environments
- Real-time and historical **performance monitoring** with:
  - Performance Advisor
  - Query Profiler
  - Real-Time Performance Panel (RTPP)
  - Namespace Insights
- How to run **MongoDB native diagnostic commands** (e.g., `serverStatus`, `currentOp`, `top`)
- How to configure **alerts and logging**
- Best practices for **upgrading Atlas clusters** (minor and major)

---

## 📁 Files Included

| File name                     | Description |
|------------------------------|-------------|
| `create_backup.sh`           | Bash script that creates on-demand snapshots for M10+ clusters using the Atlas CLI. |
| `restore_snapshot.sh`        | CLI example script for restoring a snapshot to the same or a different cluster. |
| `restore_point_in_time.sh`   | Example command restoring a cluster to a specific point in time using oplog replay. |
| `analyze_performance.sh`     | CLI script to use Performance Advisor and list slow queries, namespaces, and suggested indexes. |
| `monitor_nodes.sh`           | Script showing how to list Atlas nodes and retrieve node-specific metrics. |
| `native_diagnostics.md`      | Markdown summary of native MongoDB diagnostic commands like `currentOp`, `serverStatus`, `top`, and `dbStats`. |
| `alert_config.sh`            | Example command to create Atlas alerts for query targeting using CLI. |
| `download_logs.sh`           | Script to fetch and download logs from specific cluster nodes. |

---

## ✅ Requirements

- **MongoDB Atlas CLI**: [`atlascli`](https://www.mongodb.com/docs/atlas/cli/)
- **MongoDB 8.0+**
- **Atlas project** and M10+ cluster for full feature access
- Tools:
  - [`mongodump`](https://www.mongodb.com/docs/database-tools/mongodump/) – for creating logical backups  
  - [`mongorestore`](https://www.mongodb.com/docs/database-tools/mongorestore/) – for restoring BSON dumps  
  - [`mongosh`](https://www.mongodb.com/docs/mongodb-shell/) – MongoDB shell

---

## 🛠️ Notes

- **M0 and Flex clusters** have limited backup/restore capabilities – no on-demand snapshots or point-in-time recovery.
- Always test restore procedures in staging environments.
- Use **Performance Advisor** and **Query Profiler** to identify inefficient queries and improve indexing.
- Alerts should be configured for production clusters to catch CPU steal, query targeting, and connection limits.
- Native MongoDB commands (e.g., `db.currentOp()`, `db.serverStatus()`) are powerful tools for deeper inspection.

---

## 📚 Further Reading

- [Atlas Backup Options](https://www.mongodb.com/docs/atlas/backup/)
- [Performance Advisor Guide](https://www.mongodb.com/docs/atlas/performance-advisor/)
- [Query Profiler](https://www.mongodb.com/docs/atlas/tutorial/profile-database/)
- [Atlas Alerts](https://www.mongodb.com/docs/atlas/reference/alert-conditions/)
- [Cluster Upgrades](https://www.mongodb.com/docs/atlas/tutorial/major-version-change/)
