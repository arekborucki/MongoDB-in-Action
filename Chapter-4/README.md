# Chapter 4 – Executing CRUD Operations

This directory contains code examples and scripts for **Chapter 4** of *MongoDB 8.0 in Action*.  
It demonstrates how to create, read, update, and delete documents using the `mongosh` shell.  
The focus is on real-world use of update operators, array manipulation, bulk writes, and cursor-based data access.

---

## 🔍 What you'll learn

- Connecting to MongoDB Atlas using the Stable API
- Inserting documents with `insertOne()` and `insertMany()`
- Updating documents using:
  - `$set`, `$inc`, `$rename`, `$unset`
  - `$push`, `$addToSet`, `$pull`, `$pop`
  - Array modifiers: `$each`, `$sort`, `$slice`
  - Positional operator `$` and filtered updates with `$[identifier]` + `arrayFilters`
- Replacing entire documents using `replaceOne()`
- Deleting documents using `deleteOne()` and `deleteMany()`
- Querying data with:
  - Logical operators: `$and`, `$or`, `$not`, `$nor`
  - Comparison operators: `$eq`, `$ne`, `$gt`, `$lt`, `$in`, `$nin`
  - Array and embedded document queries
  - Regular expressions with `$regex`
  - Field projections and sorting using `sort()`, `limit()`, and `skip()`
- Executing multiple operations using `bulkWrite()` (MongoDB 8.0+)
- Iterating through results with cursors: `toArray()`, `hasNext()`, `next()`
- Ensuring API compatibility with MongoDB upgrades using the Stable API

---

## 📁 Files included

| File                     | Description |
|--------------------------|-------------|
| `stable-api.sh`          | Bash script to connect to MongoDB using the Stable API (`--apiVersion 1`). |
| `insertOperations.js`    | Inserts one or multiple documents into the `routes` collection. |
| `updateOperations.js`    | Updates documents using `$set`, `$inc`, `$rename`, `$unset`, etc. |
| `arrayOperations.js`     | Modifies array fields with `$push`, `$pull`, `$addToSet`, and `$elemMatch`. |
| `replaceOperation.js`    | Uses `replaceOne()` to replace an entire document. |
| `deleteOperations.js`    | Deletes one or more documents using `deleteOne()` and `deleteMany()`. |
| `readQueries.js`         | Shows filtering, logical conditions, projections, and regex queries. |
| `cursorExamples.js`      | Demonstrates how to use cursors (`toArray()`, `hasNext()`, `next()`) for iteration. |
| `bulkWriteExample.js`    | Runs a multi-collection `bulkWrite()` operation (requires MongoDB 8.0+). |

---

## 💡 Tips

- All examples assume you are connected to your Atlas cluster.
- Use the `sample_training` and `sample_analytics` databases imported in Chapter 2.
- Make sure to replace placeholder values (e.g., `YOUR_CLUSTER`, `YOUR_USERNAME`) in scripts like `stable-api.sh`.

---

## ✅ Requirements

- **MongoDB 8.0+** (for `bulkWrite()` across collections)
- **mongosh** shell installed and configured
- MongoDB Atlas cluster with sample datasets imported
