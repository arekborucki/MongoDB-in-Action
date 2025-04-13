# Chapter 5 – Designing MongoDB Schema

This directory contains code samples and schema examples from **Chapter 5** of _MongoDB 8.0 in Action_.  
It focuses on MongoDB schema design best practices, validation rules, and implementation of proven data modeling patterns for scalable, efficient applications.

---

## 📚 What You'll Learn

- How MongoDB's **flexible schema** supports rapid application development
- Core principles of **effective schema modeling**
- Choosing between **embedding** and **referencing** documents
- Modeling **one-to-one**, **one-to-many**, and **many-to-many** relationships
- Implementing common **schema design patterns**:
  - Subset
  - Computed
  - Bucket
  - Versioning
- Enforcing schema structure using **JSON Schema validation**
- Recognizing and avoiding **anti-patterns** such as:
  - Massive, unbounded arrays
  - Overly nested or bloated documents
  - Schema drift and uncontrolled document growth

---

## 📁 Files Included

| File name               | Description |
|-------------------------|-------------|
| `sampleDocuments.js`    | Example MongoDB documents for collections like `routes` and `airports`, illustrating embedded vs referenced relationships. |
| `schemaValidation.js`   | Demonstrates how to apply JSON Schema validation rules to a collection. |
| `designPatterns.js`     | Code examples that showcase MongoDB schema patterns including Subset, Computed, and Bucket designs. |
| `antiPatterns.md`       | A markdown guide explaining common schema anti-patterns and how to avoid them. |
| `README.md`             | Overview of the chapter’s content and usage of included files. |

---

## 🛠 Prerequisites

- **MongoDB 8.0+**
- A running **Atlas cluster** or local MongoDB instance
- Sample datasets imported: `sample_training`, `sample_airports`

---

## 💡 Tips

- Schema design should match your **application’s query patterns**, not traditional relational logic.
- Use **embedding** for performance and atomicity when related data is always accessed together.
- Use **referencing** when dealing with large or frequently updated subdocuments.
- Apply **schema validation** in production to ensure data quality and structure consistency.

---

## 🔗 Additional Resources

- 📘 [MongoDB Schema Design Documentation](https://www.mongodb.com/docs/manual/core/data-model-design/)
- 🎓 [MongoDB University – Schema Design Patterns Course](https://learn.mongodb.com/courses/schema-design-patterns)
- 🧠 [MongoDB Blog – Building with Patterns](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)
