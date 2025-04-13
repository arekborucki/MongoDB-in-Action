// Persistent processor: aggregates solar data with $tumblingWindow

// Source from sample stream
let s = {
  $source: {
    connectionName: "sample_stream_solar",
    timeField: {
      $dateFromString: {
        dateString: "$timestamp"
      }
    }
  }
};

// Group stage: aggregate sensor readings
let g = {
  $group: {
    _id: "$group_id",
    max_temp: { $avg: "$obs.temp" },
    avg_watts: { $avg: "$obs.watts" },
    median_watts: { $min: "$obs.watts" },
    max_watts: { $max: "$obs.watts" },
    min_watts: { $min: "$obs.watts" }
  }
};

// Tumbling window: 10-second windows
let t = {
  $tumblingWindow: {
    interval: {
      size: NumberInt(10),
      unit: "second"
    },
    pipeline: [g]
  }
};

// Output to Atlas DB
let m = {
  $merge: {
    into: {
      connectionName: "mongodb-in-action-connection",
      db: "spiDB",
      coll: "spiColl"
    }
  }
};

// Create processor
sp.createStreamProcessor("mongodbInAction", [s, t, m]);

// Start it
sp.mongodbInAction.start()
