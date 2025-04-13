// Stream processor with validation and Dead Letter Queue (DLQ)

// Source: Kafka topic "dailySales"
let source = {
  $source: {
    connectionName: "salesDataConnection",
    topic: "dailySales"
  }
};

// $validate: schema validation, send invalid data to DLQ
let validate = {
  $validate: {
    validator: {
      $and: [
        { productId: { $exists: true, $type: "string" } },
        { quantity: { $exists: true, $type: "int", $gte: 1 } },
        { price: { $exists: true, $type: "double", $gte: 0 } }
      ]
    },
    validationAction: "dlq"  // Send non-matching docs to DLQ
  }
};

// Sink for valid data
let sink = {
  $merge: {
    into: {
      connectionName: "validatedSalesData",
      db: "salesDB",
      coll: "validatedSales"
    }
  }
};

// Create pipeline
let processor = [source, validate, sink];

// DLQ Configuration
let dlq = {
  dlq: {
    connectionName: "mongodb-in-action-connection",
    db: "ErrorLogs",
    coll: "TransactionErrors"
  }
};

// Create processor with DLQ
sp.createStreamProcessor("salesDataProcessor", processor, dlq);

// Start the processor
sp.salesDataProcessor.start()
