# Chapter 11 – Carrying Out Full-Text Search Using Atlas Search

This directory contains examples and code samples from **Chapter 11** of _MongoDB 8.0 in Action_.  
It explores **Atlas Search**, a powerful full-text search engine built into MongoDB Atlas and powered by **Apache Lucene**.

---

## 🔍 What You'll Learn

- How to enable full-text search in Atlas using **Search Indexes**
- How **Apache Lucene** and inverted indexing powers Atlas Search
- How to configure **Atlas Search Indexes** using static mapping
- How to run powerful queries with `$search` and `$searchMeta` stages
- How to use **fuzzy**, **wildcard**, **proximity**, and **facet** operators
- How to experiment with queries in **Atlas Search Playground**
- How to use Atlas CLI to manage search indexes

---

## 📁 Files Included

| File name                | Description |
|--------------------------|-------------|
| `index-definition.json`  | Static mapping config used to create an Atlas Search index on `sample_training.inspections`. |
| `create_search_index.sh` | Shell script that creates a new Atlas Search index using the `index-definition.json` file. |
| `search_text_query.js`   | Node.js example using `$search` with compound operator and score relevance. |
| `search_fuzzy_query.js`  | Node.js example performing fuzzy search using `$search` on business names. |
| `search_proximity.js`    | Node.js example using the `phrase` operator to find nearby words with `slop`. |
| `search_wildcard.js`     | Node.js example using wildcard patterns to match partially unknown text. |
| `search_facet_query.js`  | Node.js example using `$search` and `$facet` to group results by year, result, and sector. |
| `search_meta_stats.js`   | Node.js query combining `$search` with `$facet` and `$$SEARCH_META` to return result metadata. |
| `search_meta_count.js`   | Minimal example using `$searchMeta` to return result count only. |

---

## ✅ Requirements

- **MongoDB Atlas** account and project
- Cluster with at least M0 (for limited index support) or M10+ (for full capabilities)
- **Atlas CLI** installed and authenticated (`atlas login`)
- **Node.js** environment (`npm install mongodb`)
- Sample dataset `sample_training.inspections` loaded (available from MongoDB Atlas sample datasets)

---

## ⚠️ Notes

- M0 clusters support **up to 3 search indexes**; for more, use M10+ tiers.
- Atlas Search does **not require a separate system** like Elasticsearch – no need for synchronization.
- The **mongot** process runs alongside `mongod` to manage real-time indexing.
- Query results can include **relevance scores**, **highlighting**, and **faceting**.
- Use **Atlas Search Playground** (https://www.mongodb.com/docs/atlas/atlas-search/playground/) to quickly test features without deploying a cluster.
- Search indexes may impact cluster performance during build – plan for it in production.

---
