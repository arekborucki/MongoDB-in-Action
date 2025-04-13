// Find all documents in the routes collection
db.routes.find()

// Find documents where the source airport is 'LHR'
db.routes.find({ src_airport: 'LHR' })

// Find documents where either source is CDG or destination is JFK
db.routes.find({
  $or: [
    { "src_airport": "CDG" },
    { "dst_airport": "JFK" }
  ]
})

// Find documents with src_airport in a list of values
db.routes.find({ src_airport: { $in: ['MUC', 'JFK', 'LHR', 'DFW'] } })

// Find documents where airplane does NOT start with '7'
db.routes.find({ airplane: { $not: { $regex: '^7' } } })

// Return only selected fields: airline.name, src_airport, dst_airport (no _id)
db.routes.find(
  {},
  { "airline.name": 1, "src_airport": 1, "dst_airport": 1, _id: 0 }
)

