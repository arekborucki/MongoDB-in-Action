// Example of a covered query using only indexed fields.
db.movies.find(
  { year: 1914, "imdb.rating": { $gte: 7 } },
  { title: 1, year: 1, _id: 0 }
).explain("executionStats")
