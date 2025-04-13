# Chapter 6 – Building Aggregation Pipelines

This directory contains examples and explanations from **Chapter 6** of *MongoDB 8.0 in Action*.  
It focuses on the MongoDB Aggregation Framework and how to use pipelines for efficient data analysis, transformation, and reporting.

---

## 🔍 What you'll learn

- How the aggregation framework works in MongoDB
- Writing aggregation pipelines with `db.collection.aggregate()`
- Key stages like:
  - `$match`, `$group`, `$sort`, `$limit`, `$project`, `$set`, `$unset`, `$unwind`
- Using `$lookup` for joining collections
- Writing and saving aggregation results using `$merge` and `$out`
- Working with:
  - Accumulators (`$sum`, `$avg`, `$max`, `$min`)
  - Array deconstruction with `$unwind`
- Replacing `$project` with `$set` and `$unset` for clarity and flexibility
- Creating MongoDB views using `$lookup`
- Using `$mergeObjects` with `$lookup` for flattening documents
- Leveraging the Aggregation Pipeline Builder in MongoDB Atlas
- Best practices for performance and pipeline optimization

---

## 📁 Files included

| File                       | Description |
|----------------------------|-------------|
| `basicPipeline.js`         | Example of a simple pipeline using `$match`, `$group`, `$sort`, and `$limit`. |
| `lookupJoin.js`            | Demonstrates joining two collections using `$lookup`. |
| `mergeResults.js`          | Shows how to store pipeline results using `$merge`. |
| `unwindExample.js`         | Example of deconstructing arrays using `$unwind`. |
| `accumulatorExample.js`    | Uses `$avg`, `$sum`, and `$max` to analyze data. |
| `setUnset.js`              | Modifies documents using `$set` and `$unset` instead of `$project`. |
| `atlasPipelineBuilder.md`  | Instructions and screenshots for using the Atlas aggregation builder UI. |

---

## 💡 Tips

- Use `$match` as early as possible in the pipeline to reduce processed documents.
- Replace `$project` with `$set`/`$unset` unless you’re restructuring documents.
- Ensure fields used in `$sort` and `$lookup` are indexed for performance.
- Be cautious when using `$lookup` in high-traffic collections—denormalization may be better.

---

## ✅ Requirements

- **MongoDB 8.0+**
- Sample datasets (`sample_training`, `sample_analytics`) as referenced in earlier chapters
- MongoDB Atlas for using the visual Aggregation Pipeline Builder (optional)
- **mongosh** shell for running the examples
