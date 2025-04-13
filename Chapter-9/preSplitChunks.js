// Manually splits an empty sharded collection into predefined chunks before inserting large volumes of data.
var splitPoints = [
  { src_airport: "JFK", dst_airport: "LHR", "airline.name": "British Airways" },
  { src_airport: "LAX", dst_airport: "NRT", "airline.name": "Japan Airlines" },
  { src_airport: "DXB", dst_airport: "SYD", "airline.name": "Emirates" }
];

splitPoints.forEach(function(point) {
  db.adminCommand({
    split: "sample_training.routes",
    middle: point
  });
})
