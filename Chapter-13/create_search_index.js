// This script connects to a local Atlas cluster and creates a full-text Search index
// on the 'inspections' collection in the 'sample_training' database.

use sample_training;

// Create a full-text search index with dynamic mapping
db.inspections.createSearchIndex(
  "LocalSearchIndex",
  {
    mappings: {
      dynamic: true
    }
  }
);

// Verify the index was created
printjson(db.inspections.getSearchIndexes())
