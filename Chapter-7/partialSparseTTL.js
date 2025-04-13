// Creates partial, sparse, and TTL indexes with practical examples.
db.movies.createIndex({ year: 1 }, { partialFilterExpression: { type: { $eq: "movie" } } })
db.movies.createIndex({ runtime: 1 }, { sparse: true })
db.transactions.createIndex({ date: 1 }, { expireAfterSeconds: 31536000 })
