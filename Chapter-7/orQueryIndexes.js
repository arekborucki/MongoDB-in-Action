// Optimizes $or queries by ensuring each condition is indexed.
db.movies.createIndex({ year: 1 })
db.movies.createIndex({ "imdb.rating": 1 })
db.movies.find({
  $or: [
    { year: 1914 },
    { "imdb.rating": { $gt: 7 } }
  ]
}).explain("executionStats")
