# Chapter 4 – Executing CRUD Operations

This directory contains code examples and scripts for **Chapter 4** of _MongoDB 8.0 in Action_.  
It demonstrates how to create, read, update, and delete documents using the `mongosh` shell.  
The focus is on practical use of update operators, array manipulation, bulk operations, and efficient data retrieval with cursors.

---

## 🔍 What You'll Learn

- Connecting to MongoDB Atlas using the **Stable API**
- Inserting documents with `insertOne()` and `insertMany()`
- Updating documents using:
  - `$set`, `$inc`, `$rename`, `$unset`
  - `$push`, `$addToSet`, `$pull`, `$pop`
  - Array modifiers: `$each`, `$sort`, `$slice`
  - Positional operator `$` and filtered updates with `$[identifier]` + `arrayFilters`
- Replacing documents using `replaceOne()`
- Deleting documents using `deleteOne()` and `deleteMany()`
- Querying documents with:
  - Logical operators: `$and`, `$or`, `$not`, `$nor`
  - Comparison operators: `$eq`, `$ne`, `$gt`, `$lt`, `$in`, `$nin`
  - Queries on arrays and embedded documents
  - Pattern matching with `$regex`
  - Field projection, sorting, pagination with `sort()`, `limit()`, `skip()`
- Performing multiple operations with `bulkWrite()` (MongoDB 8.0+)
- Iterating through results using cursors (`toArray()`, `hasNext()`, `next()`)
- Ensuring forward compatibility using the **Stable API**

---

## 📁 Files Included

| File name                | Description |
|--------------------------|-------------|
| `stable-api.sh`          | Bash script to connect to MongoDB Atlas using Stable API (`--apiVersion 1`). |
| `insertOperations.js`    | Inserts documents into the `routes` collection using `insertOne()` and `insertMany()`. |
| `updateOperations.js`    | Demonstrates update operators like `$set`, `$inc`, `$rename`, `$unset`, and array filters. |
| `arrayOperations.js`     | Manipulates array fields using `$push`, `$pull`, `$addToSet`, and `$elemMatch`. |
| `replaceOperation.js`    | Replaces an entire document using `replaceOne()`. |
| `deleteOperations.js`    | Deletes documents with `deleteOne()` and `deleteMany()` based on filters. |
| `readQueries.js`         | Contains diverse query examples using filters, logical conditions, projections, and `$regex`. |
| `cursorExamples.js`      | Shows how to work with cursors for efficient data access using `toArray()`, `hasNext()`, and `next()`. |
| `bulkWriteExample.js`    | Executes a `bulkWrite()` operation across multiple collections (MongoDB 8.0+ only). |

---

## 💡 Tips

- All scripts assume you're connected to your **MongoDB Atlas** cluster.
- Use collections from `sample_training` and `sample_analytics` datasets imported in Chapter 2.
- Be sure to update placeholder values (e.g., `YOUR_CLUSTER_URI`, `YOUR_USERNAME`) in scripts like `stable-api.sh`.
- The **Stable API** is especially helpful when working with future MongoDB versions – it ensures consistent behavior across upgrades.

---

## ✅ Requirements

- **MongoDB 8.0+**
- **mongosh** (MongoDB Shell)
- Access to a MongoDB Atlas cluster with sample datasets loaded

---

## 📚 Additional Resources

- 📖 [MongoDB CRUD Operations – Official Documentation](https://www.mongodb.com/docs/manual/crud/)
