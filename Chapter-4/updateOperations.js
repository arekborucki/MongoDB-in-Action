// Update airplane type using $set
db.routes.updateOne(
  { "airline.id": 411, "src_airport": "LHR", "dst_airport": "SFO", "airplane": "747" },
  { $set: { "airplane": "A380" } }
)

// Increment stops using $inc
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX", "stops": 0 },
  { $inc: { "stops": 1 } }
)

// Push to array
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $push: { prices: { class: "business", price: 2500 } } }
);

// Update array with arrayFilters
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $set: { "prices.$[elem].price": 600 } },
  { arrayFilters: [ { "elem.class": "economy" } ] }
)
