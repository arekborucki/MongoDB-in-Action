// create_text_index.js
// This script creates a full-text search index in a local Atlas deployment
// using the db.collection.createSearchIndex() wrapper in mongosh.


use sample_training;

// Create full-text search index with dynamic mapping
db.inspections.createSearchIndex(
  "LocalSearchIndex",
  {
    mappings: {
      dynamic: true
    }
  }
);

// Confirm index creation
printjson(db.inspections.getSearchIndexes())
