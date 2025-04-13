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
)

db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $push: { prices: { $each: [{ class: "economy", price: 800 }, { class: "first", price: 2000 }] } } }
)

db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  {
    $push: {
      prices: {
        $each: [
          { class: "premium economy", price: 1100 },
          { class: "luxury", price: 3000 }
        ],
        $sort: { price: 1 },
        $slice: -3
      }
    }
  }
)

db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $addToSet: { prices: { class: "economy plus", price: 1200 } } }
)


db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $pull: { prices: { class: "first", price: 2000 } } }
)

db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $pop: { prices: 1 } } // usuwa ostatni
)


db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $set: { "prices.2.price": 950 } }
)


db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX", "prices.class": "luxury" },
  { $set: { "prices.$.price": 3500 } }
)

db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $set: { "prices.$[elem].price": 600 } },
  { arrayFilters: [{ "elem.class": "economy" }] }
)

