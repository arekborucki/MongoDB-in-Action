// Merges all eligible contiguous chunks for the `routes` collection on shard "shard0000".
db.adminCommand({
  mergeAllChunksOnShard: "sample_training.routes",
  shard: "shard0000"
})
