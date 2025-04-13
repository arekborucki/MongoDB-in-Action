// Creates single-field, compound, multikey, and other index types.
db.movies.createIndex({ title: 1 }) // single-field index
db.movies.createIndex({ year: 1, title: 1 }) // compound index
db.customers.createIndex({ accounts: 1 }) // multikey index
db.movies.createIndex({ title: "text", fullplot: "text" }) // text index
db.movies.createIndex({ "tomatoes.$**": 1 }) // wildcard index
db.shipwrecks.createIndex({ coordinates: "2dsphere" }) // geospatial index
db.logs.createIndex({ server_id: "hashed" }) // hashed index
