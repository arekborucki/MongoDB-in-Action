db.routes.aggregate([
  { $match: { airplane: "CR2" } },
  {
    $group: {
      _id: "$_id",
      src_airport: { $first: "$src_airport" },
      dst_airport: { $first: "$dst_airport" },
      airline_name: { $first: "$airline.name" }
    }
  },
  {
    $merge: {
      into: "routes",
      on: "_id",
      whenMatched: "merge",
      whenNotMatched: "insert"
    }
  }
])
