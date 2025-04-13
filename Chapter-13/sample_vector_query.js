// Sample vector search query executed in a local Atlas deployment
// Requires a 'plot_embedding' field containing 1536-dimensional vectors
// Index must already be created using `create_vector_index.js`

use sample_mflix;

db.embedded_movies.aggregate([
  {
    $search: {
      index: "vectorSearchIndex",
      knnBeta: {
        vector: [0.11, 0.23, 0.91, 0.17, ...], // Example vector
        path: "plot_embedding",
        k: 5
      }
    }
  },
  {
    $limit: 5
  },
  {
    $project: {
      title: 1,
      score: { $meta: "searchScore" }
    }
  }
])
