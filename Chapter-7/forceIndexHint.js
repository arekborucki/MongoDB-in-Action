// Demonstrates forcing index use with .hint().
db.movies.find({ year: 1914, "imdb.rating": { $gte: 7 } }).sort({ title: 1 }).hint({ year: 1, title: 1, "imdb.rating": 1 }).explain("executionStats")
