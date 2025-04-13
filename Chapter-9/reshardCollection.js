// Initiates resharding of the `routes` collection in the `sample_training` database using a new shard key.
db.adminCommand({
  reshardCollection: "sample_training.routes",
  key: {
    src_airport: 1,
    dst_airport: 1,
    "airline.name": 1
  }
})
