# Chapter 7 – Indexing for Query Performance

This directory contains examples and explanations from **Chapter 7** of *MongoDB 8.0 in Action*.  
It focuses on understanding how indexes impact query performance and how to create, analyze, and manage them effectively.

---

## 🔍 What you'll learn

- How the MongoDB query planner selects and executes query plans
- Using `.explain()` to inspect query execution
- Understanding index types:
  - Single-field
  - Compound
  - Multikey
  - Text
  - Wildcard
  - Geospatial (2d & 2dsphere)
  - Hashed
- Creating and converting indexes (e.g., to `unique`, `TTL`, or `partial`)
- Optimizing queries with the ESR rule (Equality, Sort, Range)
- Using `.hint()` to force index usage
- Monitoring index usage with `$indexStats`
- Creating covered queries for maximum performance
- Handling index lifecycle:
  - Building, hiding, dropping, and modifying indexes
- Identifying when **not** to use an index
- Managing indexes in MongoDB Atlas and Compass

---

## 📁 Files included

| File                    | Description |
|-------------------------|-------------|
| `explainUsage.js`       | Shows how to use `.explain()` to analyze query plans and planner decisions. |
| `indexTypes.js`         | Creates single-field, compound, multikey, and other index types. |
| `compoundIndex.js`      | Demonstrates compound indexes with ESR rule and prefix matching. |
| `partialSparseTTL.js`   | Creates partial, sparse, and TTL indexes with practical examples. |
| `modifyDropHideIndex.js`| Shows how to drop, hide, unhide, or convert indexes using `collMod`. |
| `indexStats.js`         | Monitors index usage using the `$indexStats` aggregation stage. |
| `forceIndexHint.js`     | Demonstrates forcing index use with `.hint()`. |
| `orQueryIndexes.js`     | Optimizes `$or` queries by ensuring each condition is indexed. |
| `coveredQuery.js`       | Example of a covered query using only indexed fields. |
| `whenNotToUseIndex.js`  | Explains when avoiding indexes may be more efficient. |
| `atlasIndexGUI.md`      | Screenshots and guide to managing indexes via MongoDB Atlas and Compass. |

---

## 💡 Tips

- Use `.explain("executionStats")` to see how efficiently a query runs.
- Apply the **ESR rule** when creating compound indexes: Equality → Sort → Range.
- Don’t over-index — too many indexes slow down writes and increase storage usage.
- Covered queries are fast — return only indexed fields and exclude `_id`!
- Hide indexes before dropping them in production to safely test performance impact.
- Use `$indexStats` to identify unused indexes and clean them up regularly.
- Wildcard and text indexes are useful for flexible or full-text searches but use more storage.
- Use TTL indexes to auto-delete documents like expired sessions or logs.

---

## ✅ Requirements

- **MongoDB 8.0+**
- Sample datasets: `sample_mflix`, `sample_analytics`, `sample_geospatial`
- **mongosh** shell for running examples
- MongoDB Atlas or Compass (optional) for GUI-based index management
