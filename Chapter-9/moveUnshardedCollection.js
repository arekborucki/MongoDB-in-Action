// Moves an unsharded collection (`zips`) to a different shard ("shard0001") without requiring a shard key.
db.adminCommand({
  moveCollection: "sample_training.zips",
  toShard: "shard0001"
})
