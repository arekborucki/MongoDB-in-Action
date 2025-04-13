# Chapter 13 – Developing AI Applications Locally with Atlas CLI

This directory contains examples and code samples from **Chapter 13** of _MongoDB 8.0 in Action_.  
It focuses on how to use the **Atlas CLI** to set up and manage **local Atlas clusters**, enabling full-text and vector search development entirely on your local machine.

---

## 🧠 What You'll Learn

- How to **create a local Atlas deployment** using the `atlas` CLI
- Requirements and setup instructions for **Docker-based environments**
- How the **mongod** and **mongot** processes work together locally
- Managing local clusters with commands like `start`, `pause`, `delete`, `logs`
- Loading **sample data** into your local cluster using `mongorestore`
- Executing **full-text** and **vector search queries** in local MongoDB
- Using `db.collection.createSearchIndex()` to build indexes locally
- Understanding container internals with `docker inspect`, `docker exec`, and `docker top`

---

## 📁 Files Included

| File name                   | Description |
|-----------------------------|-------------|
| `local_deployment_setup.sh` | Shell script to automate local Atlas deployment using `atlas deployments setup`, including pre-checks and connection hints. |
| `create_search_index.js`    | `mongosh` script that creates a **full-text search index** using `createSearchIndex()` in a local Atlas cluster. |
| `create_vector_index.js`    | `mongosh` script to create a **vector search index** on the `plot_embedding` field for use with semantic queries. |
| `full_text_query.js`        | `mongosh` aggregation pipeline performing advanced full-text search with filters and fuzzy matching. |
| `vector_query_local.js`     | `mongosh` script demonstrating how to query locally stored vector embeddings using `$search` with `knnBeta`. |
| `sample_vector_query.js`    | Example vector similarity query using a sample embedding vector. Useful for testing semantic search with real data. |

---

## ✅ Requirements

- **MongoDB Atlas CLI** (`atlas`)  
  [Install guide](https://www.mongodb.com/docs/atlas/cli/stable/install/)
- **Docker** (Desktop v4.31+ or Engine 27.0+)
- **MongoDB Database Tools** (for `mongorestore`)  
  [Install guide](https://www.mongodb.com/docs/database-tools/installation/)
- Sample dataset: `sampledata.archive` from [MongoDB Education S3](https://atlas-education.s3.amazonaws.com/sampledata.archive)

---

## ⚠️ Notes

- Local Atlas clusters are for **development only**.
- Atlas CLI uses **Docker containers** to simulate a full Atlas environment (including `mongod` and `mongot`).
- `mongot` provides **Search and Vector Search** features and runs alongside `mongod` locally.
- You can inspect running containers using `docker ps`, `docker inspect`, and `docker top`.
