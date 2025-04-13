// Uses $out to write pipeline results to a new collection
db.routes.aggregate([
  { $match: { airplane: "CR2" } },
  {
    $project: {
      src_airport: 1,
      airplane: 1
    }
  },
  {
    $out: { db: "output_db", coll: "projected_routes" }
  }
])
