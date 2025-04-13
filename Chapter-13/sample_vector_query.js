// sample_vector_query.js
// Sample vector search query executed in a local Atlas deployment
// Requires a 'plot_embedding' field containing 1536-dimensional vectors
// Index must already be created using `create_vector_index.js`

use sample_mflix;

// Example query vector (1536-dimensional). This is a shortened dummy vector for demonstration.
const queryVector = Array(1536).fill(0).map((_, i) => i % 2 === 0 ? 0.001 : 0.002);

const results = db.embedded_movies.aggregate([
  {
    $vectorSearch: {
      index: "vectorSearchIndex",
      path: "plot_embedding",
      queryVector: queryVector,
      numCandidates: 100,
      limit: 5
    }
  },
  {
    $project: {
      title: 1,
      plot: 1,
      _id: 0,
      score: { $meta: "vectorSearchScore" }
    }
  }
])

print("\n🔍 Top 5 Vector Search Results:\n");
results.forEach(printjson);
