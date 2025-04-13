// Inserts a document with custom write concern options: requires majority acknowledgment, journaling, and 5s timeout.
db.routes.insertOne(
  { src_airport: "MUC" },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 5000
    }
  }
)
