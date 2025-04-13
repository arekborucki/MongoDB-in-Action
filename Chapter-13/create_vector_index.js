// create_vector_index.js
// This script connects to a local Atlas cluster and creates a Vector Search index
// on the 'plot_embedding' field in the 'embedded_movies' collection.

use sample_mflix;

// Create a vector search index on 'plot_embedding' field
db.embedded_movies.createSearchIndex({
  name: "vectorSearchIndex",
  mappings: {
    dynamic: true,
    fields: {
      plot_embedding: {
        type: "knnVector",
        dimensions: 1536,
        similarity: "euclidean"
      }
    }
  }
});

// Confirm index creation
printjson(db.embedded_movies.getSearchIndexes())
