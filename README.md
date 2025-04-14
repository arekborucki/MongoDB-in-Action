# MongoDB-in-Action

**MongoDB 8.0 in Action – Building on the Atlas Data Platform**

This repository contains all the **code examples**, **scripts**, and **datasets** referenced in the book _MongoDB 8.0 in Action_.  
Each chapter explores a different aspect of MongoDB — from document modeling and CRUD operations to full-text search, vector search, monitoring, and security in MongoDB Atlas.

GitHub repo: [arekborucki/MongoDB-in-Action](https://github.com/arekborucki/MongoDB-in-Action)

---

## 📚 Book Structure

Each folder in this repository corresponds to a chapter in the book:

| Chapter | Title                                                   | Focus Area |
|---------|---------------------------------------------------------|------------|
| 1       | Understanding the World of MongoDB                      | Document model, Atlas overview |
| 2       | Getting Started with MongoDB Atlas and Data             | Clusters, datasets, Atlas CLI |
| 3       | Communicating with MongoDB                              | mongosh, Compass, drivers |
| 4       | Executing CRUD Operations                               | Inserts, updates, drivers |
| 5       | Designing Schema and Modeling Data                      | Embedding, referencing, validation |
| 6       | Building Aggregation Pipelines                          | Stages, optimization, $merge |
| 7       | Indexing for Query Performance                          | Types, strategies, explain |
| 8       | Executing Multi-Document ACID Transactions              | Sessions, retry logic |
| 9       | Using Replication and Sharding                          | Replica sets, oplog, sharding |
| 10      | Delving into Database as a Service                      | Atlas tiers, auto-scaling |
| 11      | Executing Full-Text Search using Atlas Search           | Lucene integration, $search |
| 12      | Learning Semantic Techniques and Atlas Vector Search    | Embeddings, $vectorSearch |
| 13      | Developing AI Applications Locally with Atlas CLI       | Local Atlas cluster, dev setup |
| 14      | Building Retrieval-Augmented Generation AI Chatbot      | LangChain, embeddings, Atlas |
| 15      | Building Event-Driven Applications                      | Stream Processing, Triggers |
| 17      | Archiving Online with Atlas Online Archive              | Tiering, querying archived data |
| 18      | Querying MongoDB Atlas Using SQL                        | SQL interface, BI tools |
| 19      | Creating Atlas Charts, Database Triggers and Functions  | Charts, functions, automation |
| 20      | Understanding Atlas and MongoDB Security Features       | Encryption, auditing, compliance |
| 21      | Operational Excellence with MongoDB Atlas               | Monitoring, backup, restore, alerts |

> ℹ️ Chapter 16 is not included.

---

## 🛠️ Technologies & Tools

- **MongoDB 8.0+**
- **MongoDB Atlas** – fully managed cloud database platform
- **mongosh** – MongoDB shell
- **MongoDB Atlas CLI** – CLI tool for managing Atlas
- **MongoDB Compass** – GUI for data inspection
- Drivers:
  - Node.js (`mongodb`)
  - Python (`pymongo`)
  - Ruby (`mongo`)

---

## 📁 Repository Layout

Each chapter folder includes:

- Source code with inline comments
- Scripts and utility examples (Bash, CLI)
- JSON or BSON datasets where applicable
- Chapter-specific `README.md` with walkthrough

---

## 🚀 Quick Start

```bash
git clone https://github.com/arekborucki/MongoDB-in-Action.git
cd MongoDB-in-Action
```
