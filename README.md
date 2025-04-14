# MongoDB-in-Action

**MongoDB 8.0 in Action – Building on the Atlas Data Platform**

This repository contains all the **code examples**, **scripts**, and **datasets** referenced in the book _MongoDB 8.0 in Action_.  
Each chapter dives into a different area of MongoDB — from basic CRUD and indexing to advanced features like multi-document transactions, aggregation pipelines, vector search, and working with MongoDB Atlas in the cloud.

GitHub repo: [arekborucki/MongoDB-in-Action](https://github.com/arekborucki/MongoDB-in-Action)

---

## 📚 Book Structure

Each folder in this repository corresponds to a chapter in the book:

| Chapter | Title                                           | Focus Area |
|---------|-------------------------------------------------|------------|
| 1       | Introduction to MongoDB                         | Overview, BSON model, tools |
| 2       | MongoDB Shell and CRUD Operations               | `mongosh`, inserts, updates |
| 3       | Working with Documents                          | Embedded vs referenced data |
| 4       | MongoDB Query Language                          | Filters, projections, operators |
| 5       | Indexing Strategies                             | Single field, compound, TTL |
| 6       | Aggregation Framework Basics                    | `$match`, `$group`, `$project` |
| 7       | Index Use Cases and Anti-Patterns               | Performance trade-offs |
| 8       | Executing Multi-Document ACID Transactions      | Sessions, rollback, retry logic |
| 9       | Read Preferences and Replica Sets               | Read modes, consistency |
| 10      | Data Modeling Best Practices                    | Embedding, referencing, patterns |
| 11      | Schema Design for Performance                   | Optimization, workload alignment |
| 12      | Working with Time-Series Data                   | Buckets, compression, TTL |
| 13      | Vector Search and Similarity Queries            | Embeddings, cosine similarity |
| 14      | MongoDB Atlas Vector Search                     | Atlas-native search capabilities |
| 15      | Serverless Triggers and Functions               | Atlas Functions, Triggers |
| 17      | Connecting to Archived Data                     | Atlas Data Federation |
| 18      | SQL Integration and Data Flattening             | BI Connector, `$sql` operator |
| 19      | Monitoring and Performance Optimization         | Metrics, query profiler |

> ℹ️ Chapter 16 is not included.

---

## 🛠️ Technologies & Tools

- **MongoDB 8.0+**
- **MongoDB Atlas** – fully managed cloud database
- **MongoDB Compass** – GUI for querying, schema exploration, and optimization
- **mongosh** – modern MongoDB shell
- **Node.js** + [`mongodb`](https://www.npmjs.com/package/mongodb) driver
- **Python** + [`pymongo`](https://pypi.org/project/pymongo/) driver
- **Ruby** + [`mongo`](https://rubygems.org/gems/mongo) gem
- **MongoDB Atlas CLI** & Web UI

---

## 📁 Repository Layout

Each chapter folder includes:

- Source code with inline comments
- JSON files or scripts for test datasets
- Shell commands or utility scripts
- Chapter-specific `README.md` with explanations

---

## 🚀 Quick Start

```bash
git clone https://github.com/arekborucki/MongoDB-in-Action.git
cd MongoDB-in-Action
```
