// vector_query_local.js
//
// Performs a semantic similarity query using the knnBeta operator.
// Requires a vector index on the plot_embedding field.

const queryVector = [0.12, 0.58, 0.32, 0.85]; // Replace with your actual query embedding

db.movies.aggregate([
  {
    $search: {
      index: "vector_plot_index",
      knnBeta: {
        vector: queryVector,
        path: "plot_embedding",
        k: 5
      }
    }
  },
  {
    $project: {
      title: 1,
      score: { $meta: "searchScore" }
    }
  }
])
