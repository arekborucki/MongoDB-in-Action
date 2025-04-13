// Unshards the `routes` collection by consolidating all documents into a single shard (e.g., "shard0001").
db.adminCommand({
  unshardCollection: "sample_training.routes",
  toShard: "shard0001"
})
