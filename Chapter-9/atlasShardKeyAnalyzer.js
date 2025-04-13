// Enables query sampling for a collection, then analyzes a proposed shard key using query statistics.
use sample_training;

// Enable query analyzer on routes collection
db.routes.configureQueryAnalyzer({
  mode: "full",
  samplesPerSecond: 1
})

// Create compound index supporting the proposed shard key
db.routes.createIndex({
  src_airport: 1,
  dst_airport: 1,
  "airline.name": 1
})

// Analyze effectiveness of the proposed shard key
db.routes.analyzeShardKey({
  src_airport: 1,
  dst_airport: 1,
  "airline.name": 1
})
