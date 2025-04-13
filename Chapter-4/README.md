# Chapter 4 – Executing CRUD Operations

This directory contains code examples and scripts for **Chapter 4** of *MongoDB 8.0 in Action*.  
It walks through how to create, read, update, and delete documents using the `mongosh` shell, with a strong focus on real-world use of update operators, array handling, and advanced querying.

## 🔍 What you'll learn

- Inserting documents with `insertOne()` and `insertMany()`
- Updating documents using `$set`, `$inc`, `$push`, `$pull`, `$addToSet`, `$elemMatch`, and array filters
- Replacing full documents with `replaceOne()`
- Deleting documents with `deleteOne()` and `deleteMany()`
- Running advanced read queries using:
  - Logical and comparison operators
  - Array and embedded document filters
  - Regular expressions
  - Projections and sorting
- Executing multiple operations with `bulkWrite()`
- Using cursors for iteration and pagination
- Leveraging the Stable API to ensure compatibility across MongoDB upgrades

## 📁 Files included

| File                     | Description |
|--------------------------|-------------|
| `insertOperations.js`    | Inserts one or multiple documents into the `routes` collection. |
| `updateOperations.js`    | Updates documents using `$set`, `$inc`, `$rename`, and others. |
| `arrayOperations.js`     | Modifies arrays using `$push`, `$pull`, `$addToSet`, and `$elemMatch`. |
| `replaceOperation.js`    | Uses `replaceOne()` to fully replace documents. |
| `deleteOperations.js`    | Deletes documents using `deleteOne()` and `deleteMany()`. |
| `readQueries.js`         | Demonstrates queries using filters, projections, regex, and logic operators. |
| `cursorExamples.js`      | Examples of iterating query results with cursors (`toArray()`, `hasNext()`). |
| `bulkWriteExample.js`    | Executes a multi-collection `bulkWrite()` operation (MongoDB 8.0+). |

---

💡 Tip: All examples assume you are connected to your Atlas cluster, using the `sample_training` and `sample_analytics` databases loaded in Chapter 2.
