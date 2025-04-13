// Stream processor with $hoppingWindow for average temperature over time

// Source: sensor data from Kafka topic
let source = {
  $source: {
    connectionName: "iotSensorConnection",
    topic: "sensorData"
  }
};

// $hoppingWindow: 30s windows, hop every 10s
let hoppingWindow = {
  $hoppingWindow: {
    interval: {
      size: 30,
      unit: "second"
    },
    hopSize: {
      size: 10,
      unit: "second"
    },
    pipeline: [
      {
        $group: {
          _id: "$_id",
          avgTemperature: { $avg: "$temperature" }
        }
      }
    ]
  }
};

// Sink: write to MongoDB
let sink = {
  $merge: {
    into: {
      connectionName: "processedSensorData",
      db: "iotData",
      coll: "temperatureAverages"
    }
  }
};

// Assemble processor
let processor = [source, hoppingWindow, sink];

// Create and run
sp.createStreamProcessor("iotTemperatureProcessor", processor);
sp.iotTemperatureProcessor.start()
