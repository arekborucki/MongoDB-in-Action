// Performs a find query using the "majority" read concern to ensure the data was replicated to most members.
db.routes.find({ src_airport: "MUC" }).readConcern("majority")
