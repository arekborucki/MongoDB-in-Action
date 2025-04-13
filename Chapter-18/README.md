# Chapter 18 – Querying MongoDB Atlas using SQL

This directory contains code examples and scripts from **Chapter 18** of _MongoDB 8.0 in Action_.  
It shows how to use the **Atlas SQL Interface**, which enables you to query your MongoDB collections using familiar SQL syntax via the Atlas Data Federation.

---

## 🔍 What You'll Learn

- The architecture and principles behind the **Atlas SQL Interface**
- Enabling SQL access using **Atlas SQL Quick Start**
- Connecting to Atlas SQL using **mongosh**
- Writing SQL queries using:
  - `$sql` aggregation pipeline stage
  - Short-form `db.sql()` method
- Working with **UNWIND** and **FLATTEN** functions to query nested arrays and documents
- Understanding the **read-only** nature of Atlas SQL and cost implications of federated queries

---

## 📁 Files Included

| File name               | Description |
|--------------------------|-------------|
| `enableSQLInterface.md`  | Step-by-step guide to enabling Atlas SQL via the UI (Quick Start). |
| `connectSQL.sh`          | Sample `mongosh` connection string to the Atlas SQL interface. |
| `sqlPipelineQuery.js`    | Example using `$sql` aggregation stage to run SQL queries on a collection. |
| `sqlShortForm.js`        | Example using `db.sql()` short-form syntax to run SQL directly. |
| `sqlUnwindExample.sql`   | SQL query using `UNWIND` to explode array fields into rows. |
| `sqlFlattenExample.sql`  | SQL query using `FLATTEN` to normalize nested documents. |
| `README.md`              | Overview of Atlas SQL functionality and code samples in this chapter. |

---

## ✅ Requirements

- **MongoDB Atlas Cluster (M0 or higher)**
- **Atlas Data Federation** enabled (via Quick Start or manual setup)
- `mongosh` for running SQL queries
- Sample datasets: `sample_analytics`, `sample_training`

---

## 💡 Tips

- Atlas SQL is **read-only** – no writes, inserts, or updates allowed
- SQL support is based on the **SQL-92 dialect** (`mongosql`)
- `$sql` must be the **first stage** in the aggregation pipeline
- Use **UNWIND** to expand arrays and **FLATTEN** to normalize nested objects
- **SQL interface is ideal for BI integrations** with Tableau, Power BI, and JDBC/ODBC drivers

---

## 🚫 Limitations

- `SELECT DISTINCT` and `INTERVAL` arithmetic are not supported
- `UNION` is unsupported (only `UNION ALL` allowed)
- `date` type unsupported – use `timestamp` instead
- Not compatible with **Atlas Vector Search** or **Atlas Search**

---

## 🔗 Additional Resources

- 📘 [Atlas SQL Interface Documentation](https://www.mongodb.com/docs/atlas/data-federation/sql-interface/)
- 🧰 [Atlas SQL Quick Start Guide](https://www.mongodb.com/docs/atlas/data-federation/sql/quickstart/)
- 🎓 [MongoDB University: Working with Data Federation](https://learn.mongodb.com/catalog?filters=product:Data%20Federation)

---

> 💡 **Tip:** With Atlas SQL, you can power dashboards and analytical queries using your existing SQL knowledge—without flattening your document model.
