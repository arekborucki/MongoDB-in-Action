# MongoDB-in-Action

**MongoDB 8.0 in Action – Building on the Atlas Data Platform**

This repository contains all the **code examples**, **scripts**, and **datasets** used throughout the book _MongoDB 8.0 in Action_.  
Each chapter focuses on a different aspect of MongoDB, from basic CRUD operations to advanced features such as transactions, vector search, aggregation pipelines, and cloud-native operations using MongoDB Atlas.

---

## 📚 Book Structure

The book is organized into **independent chapters**, each with its own directory:

| Chapter | Title                                           | Focus Area |
|---------|-------------------------------------------------|------------|
| 1       | Introduction to MongoDB                         | Overview, data model, basic commands |
| 2       | MongoDB Shell and CRUD Operations               | `mongosh`, insert, update, delete |
| 3       | Working with Documents                          | Document structure, embedded data |
| 4       | MongoDB Query Language                          | Filters, projection, operators |
| 5       | Indexing Strategies                             | Index types, compound indexes |
| 6       | Aggregation Framework Basics                    | `$match`, `$group`, `$project` |
| 7       | Index Use Cases and Anti-Patterns               | When **not** to use indexes |
| 8       | Executing Multi-Document ACID Transactions      | Sessions, rollback, retry logic |
| 9       | Read Preferences and Replica Sets               | Primary/secondary reads |
| 10      | Data Modeling Best Practices                    | Embedding vs referencing |
| 11      | Schema Design for Performance                   | Workload-driven design |
| 12      | Working with Time-Series Data                   | Buckets, compression |
| 13      | Vector Search and Similarity Queries            | Approximate search, embeddings |
| 14      | MongoDB Atlas Vector Search                     | Atlas-native vector capabilities |
| 15      | Serverless Triggers and Functions               | Change streams, functions |
| 17      | Connecting to Archived Data                     | `atlasDataLake` and cold storage |
| 18      | SQL Integration and Data Flattening             | BI connectors, SQL-like queries |
| 19      | Monitoring and Performance Optimization         | Metrics, profiler, cloud tools |

> Note: Chapter 16 is not included in this repo.

---

## 💡 Key Technologies Used

- **MongoDB 8.0+**
- `mongosh` shell
- Drivers for:
  - Node.js (`mongodb`)
  - Python (`pymongo`)
  - Ruby (`mongo`)
- Atlas CLI and UI for cloud-native examples

---

## 📁 Repository Structure

Each chapter folder contains:

- ✅ Code samples with comments
- 📄 JSON sample data
- 🛠️ Scripts or shell commands to reproduce scenarios
- 📘 A `README.md` describing the chapter and included files

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MongoDB-in-Action.git
   cd MongoDB-in-Action
