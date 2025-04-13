// Stream processor using static document array – for debugging pipeline logic

// Source from hardcoded document array
let source = {
  $source: {
    documents: [
      { sensorName: 'sensor01', temperature: 22, humidity: 55, timestamp: new Date("2023-09-07T12:00:00Z") },
      { sensorName: 'sensor02', temperature: 45, humidity: 60, timestamp: new Date("2023-09-07T12:01:00Z") },
      { sensorName: 'sensor03', temperature: 5, humidity: 80, timestamp: new Date("2023-09-07T12:02:00Z") }
    ]
  }
};

// Validate data types and ranges
let validate = {
  $match: {
    sensorName: { $exists: true, $type: "string" },
    temperature: { $exists: true, $type: "int", $gte: -50, $lte: 100 },
    humidity: { $exists: true, $type: "int", $gte: 0, $lte: 100 },
    timestamp: { $exists: true, $type: "date" }
  }
};

// Project warning level based on temperature
let project = {
  $project: {
    sensorName: 1,
    temperature: 1,
    humidity: 1,
    timestamp: 1,
    warningLevel: {
      $cond: {
        if: { $gte: ["$temperature", 40] },
        then: "HIGH",
        else: {
          $cond: {
            if: { $lte: ["$temperature", 10] },
            then: "LOW",
            else: "NORMAL"
          }
        }
      }
    }
  }
};

// Filter only HIGH or LOW warnings
let filter = {
  $match: {
    warningLevel: { $in: ["HIGH", "LOW"] }
  }
};

// Combine pipeline
let processor = [source, validate, project, filter];

// Run in mongosh
sp.process(processor)
