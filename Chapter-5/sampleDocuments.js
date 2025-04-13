// Sample document in the `routes` collection with embedded airline data
db.routes.insertOne({
  flight_id: "FL123",
  airline: {
    id: 410,
    name: "Delta Airlines",
    alias: "2B",
    iata: "ARD"
  },
  src_airport: "JFK",
  dst_airport: "LAX",
  codeshare: "",
  stops: 0,
  airplane: "ATP"
})

// Sample document in the `airports` collection with referenced data
db.airports.insertOne({
  _id: "JFK",
  name: "JFK International Airport",
  location: {
    city: "New York",
    country: "USA"
  },
  facilities: ["Wi-Fi", "Lounge", "VIP Services"]
})
