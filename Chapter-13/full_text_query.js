// full_text_query.js
//
// Executes a full-text search query with fuzzy matching and category filter
// using the Atlas Search $search stage in an aggregation pipeline.

db.movies.aggregate([
  {
    $search: {
      index: "default",
      text: {
        query: "time travel",
        path: "plot",
        fuzzy: {
          maxEdits: 1
        }
      }
    }
  },
  {
    $match: { genres: "Sci-Fi" }
  },
  {
    $project: {
      title: 1,
      score: { $meta: "searchScore" }
    }
  }
])
