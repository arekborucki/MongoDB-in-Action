# Chapter 1 – Understanding the World of MongoDB

This directory contains code examples and learning resources from **Chapter 1** of _MongoDB 8.0 in Action_ – your introduction to the document database paradigm and the broader MongoDB ecosystem.

---

## 🔍 What You'll Learn

- Core principles of the **document data model** and flexible schemas
- Key differences between **relational** and **document-oriented** databases
- Anatomy of a MongoDB document, including **embedded documents** and **arrays**
- Fundamental **CRUD operations** using the MongoDB Query API
- High-level overview of **MongoDB architecture**, including sharding
- Introduction to the **MongoDB Atlas Developer Data Platform**
- Performance enhancements with **TCMalloc in MongoDB 8.0**

---

## 📁 Files Included

| File name            | Description |
|----------------------|-------------|
| `insert-example.js`  | Inserts a sample document using `insertOne()` to demonstrate MongoDB’s flexible schema. |
| `query-example.js`   | Retrieves a document by a field value using the `find()` method. |
| `update-example.js`  | Modifies an existing document with `updateOne()` to show dynamic schema evolution. |
| `delete-example.js`  | Deletes one or more documents using `deleteMany()` based on a matching filter. |

---

## 🧠 Tips

- MongoDB allows you to store **nested structures** directly in a document – no need for joins.
- Flexible schemas make it easy to iterate quickly during development – structure your documents based on access patterns.
- Even though MongoDB is schema-less, **schema design still matters** for performance and clarity.

---

## 📚 Additional Resources

- 📖 [Official MongoDB Documentation](https://www.mongodb.com/docs/)
