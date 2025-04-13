// Find all documents
db.routes.find()

// Find by source airport
db.routes.find({ src_airport: 'LHR' })

// Logical operators
db.routes.find({ $or: [ { src_airport: 'CDG' }, { dst_airport: 'JFK' } ] })

// Projection example
db.routes.find({}, { "airline.name": 1, "src_airport": 1, "dst_airport": 1, _id: 0 })
