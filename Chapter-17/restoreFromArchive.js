// Aggregation pipeline to restore data from Online Archive to live cluster
// Assumes the Online Archive is paused and a unique index exists on the target collection

db.sales.aggregate([
  {
    $merge: {
      into: {
        atlas: {
          clusterName: "MongoDB-in-Action-M10",
          db: "sample_supplies",
          coll: "sales"
        }
      },
      on: ["saleDate", "customer"],
      whenMatched: "keepExisting",
      whenNotMatched: "insert"
    }
  }
])
