# Chapter 5 – Designing MongoDB Schema

This directory contains code samples and schema examples for **Chapter 5** of *MongoDB 8.0 in Action*.  
It focuses on best practices for MongoDB schema design, validation techniques, and the application of real-world design patterns.

## 📚 What You’ll Learn

- How MongoDB’s flexible schema supports dynamic application development
- Key principles of effective schema modeling
- Embedding vs referencing data
- Working with one-to-one, one-to-many, and many-to-many relationships
- Implementing schema design patterns (e.g. Subset, Computed, Bucket, Versioning)
- Applying JSON Schema validation rules to collections
- Avoiding schema anti-patterns (e.g. massive arrays, bloated documents)

## 📁 Files Included

| File                    | Description |
|-------------------------|-------------|
| `sampleDocuments.js`    | Example documents for `routes` and `airports`, demonstrating embedding and referencing. |
| `schemaValidation.js`   | Adds JSON Schema validation rules to the `routes` collection. |
| `designPatterns.js`     | Code examples for schema design patterns like Subset, Computed, and Bucket. |
| `antiPatterns.md`       | Explanation of common schema anti-patterns to avoid in production. |
| `README.md`             | Overview of this chapter’s structure and content. |

## 🛠 Prerequisites

- MongoDB 8.0 or higher
- Atlas cluster or local MongoDB instance
- Sample datasets loaded (`sample_training`, `sample_airports`)

## 🔗 Resources

- 📘 [MongoDB Schema Design Docs](https://www.mongodb.com/docs/manual/core/data-model-design/)
- 🎓 [MongoDB University – Schema Design Patterns Course](https://learn.mongodb.com/courses/schema-design-patterns)
- 🧠 [MongoDB Blog – Building with Patterns](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)

---

> 💡 **Tip:** Schema design should reflect your query patterns – optimize for how your app reads and writes data, not just how it's logically related.
