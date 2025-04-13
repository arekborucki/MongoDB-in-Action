// Use $set to change the airplane type for a specific route
db.routes.updateOne(
  { "airline.id": 411, "src_airport": "LHR", "dst_airport": "SFO", "airplane": "747" },
  { $set: { "airplane": "A380" } }
)

// Use $inc to increase the number of stops by 1
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX", "stops": 0 },
  { $inc: { "stops": 1 } }
)

// Add one object to the prices array using $push
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $push: { "prices": { class: "business", price: 2500 } } }
)

// Add multiple objects to the prices array using $each
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $push: { prices: { $each: [{ class: "economy", price: 800 }, { class: "first", price: 2000 }] } } }
)

// Add and sort multiple items in the array and keep only the last 3
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

// Add an object only if it doesn't already exist in the array
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $addToSet: { prices: { class: "economy plus", price: 1200 } } }
)

// Remove a specific object from the array using $pull
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $pull: { prices: { class: "first", price: 2000 } } }
)

// Remove the last element of the prices array using $pop
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $pop: { prices: 1 } }
)

// Update the third element in the array directly by index
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $set: { "prices.2.price": 950 } }
)

// Use positional operator $ to update array element based on condition
db.routes.updateOne(
  {
    "airline.id": 413,
    "src_airport": "DFW",
    "dst_airport": "LAX",
    "prices.class": "luxury"
  },
  {
    $set: { "prices.$.price": 3500 }
  }
)

// Use arrayFilters to target specific array elements using identifiers
db.routes.updateOne(
  { "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" },
  { $set: { "prices.$[elem].price": 600 } },
  { arrayFilters: [ { "elem.class": "economy" } ] }
)
