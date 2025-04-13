// Replace an entire document with a new structure
db.routes.replaceOne(
  { "airline.id": 412, "src_airport": "CDG", "dst_airport": "JFK" },
  {
    flight_info: { airline: "Air France", flight_number: "AF 007" },
    route: { from: "CDG", to: "JFK" },
    aircraft: "Boeing 777",
    status: "Scheduled"
  },
  { upsert: true } // Creates the document if it doesn't exist
)
