// Demonstrates compound indexes with ESR rule and prefix matching.
db.movies.createIndex({ year: 1, title: 1, "imdb.rating": 1 })
db.movies.find({ year: 1914, "imdb.rating": { $gte: 7 } }).sort({ title: 1 }).explain("executionStats")
