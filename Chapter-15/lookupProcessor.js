// Stream processor with $lookup for data enrichment

// Source: read inventory updates from Kafka
let source = {
  $source: {
    connectionName: "inventoryKafkaConnection",
    topic: "inventoryUpdates"
  }
};

// $lookup stage – join with product metadata from MongoDB
let lookup = {
  $lookup: {
    from: {
      connectionName: "inventoryDbConnection",
      db: "inventoryDB",
      coll: "products"
    },
    localField: "productId",
    foreignField: "_id",
    as: "productDetails"
  }
};

// Validate enriched structure
let validate = {
  $validate: {
    validator: {
      $and: [
        { productId: { $exists: true, $type: "string" } },
        { quantity: { $exists: true, $type: "int", $gte: 1 } },
        { productDetails: { $exists: true, $type: "array" } }
      ]
    },
    validationAction: "discard"
  }
};

// Sink: write enriched and validated documents to Atlas
let sink = {
  $merge: {
    into: {
      connectionName: "validatedInventoryData",
      db: "inventoryDB",
      coll: "validatedInventory"
    }
  }
};

// Combine pipeline
let processor = [source, lookup, validate, sink];

// Register and start processor
sp.createStreamProcessor("inventoryProcessor", processor);
sp.inventoryProcessor.start()
