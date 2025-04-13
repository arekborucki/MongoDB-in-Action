// Manually moves chunks of a sharded collection to specific shards based on split point ranges.
var shards = ["shard0000", "shard0001", "shard0002", "shard0003"];

var splitPoints = [
  { src_airport: "JFK", dst_airport: "LHR", "airline.name": "British Airways" },
  { src_airport: "LAX", dst_airport: "NRT", "airline.name": "Japan Airlines" },
  { src_airport: "DXB", dst_airport: "SYD", "airline.name": "Emirates" }
];

splitPoints.forEach(function(point, index) {
  var lower = index > 0 ? splitPoints[index - 1] : { src_airport: MinKey, dst_airport: MinKey, "airline.name": MinKey };
  var upper = point;

  db.adminCommand({
    moveChunk: "sample_training.routes",
    find: lower,
    bounds: [lower, upper],
    to: shards[index % shards.length]
  });
})
