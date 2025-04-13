// Delete one document
db.routes.deleteOne({ "airline.id": 413, "src_airport": "DFW", "dst_airport": "LAX" })

// Delete many documents
db.routes.deleteMany({ "src_airport": "CDG" })
