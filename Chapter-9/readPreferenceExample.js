// Queries the `routes` collection with a read preference of `secondaryPreferred`, allowing reads from secondaries.
db.routes.find({ src_airport: "MUC" }).readPref("secondaryPreferred")
