// Stream processor with validation stage – validates schema before merging to DB

// Define source (placeholder connection, replace with actual in your registry)
let source = {
  $source: {
    connectionName: "myMongoConnection",
    db: "myDB",
    coll: "myCollection"
  }
};

// Define $validate stage to enforce schema
let validate = {
  $validate: {
    validator: {
      $and: [
        { name: { $exists: true, $type: "string" } },
        { age: { $exists: true, $type: "int", $gte: 18 } },
        { email: { $exists: true, $regex: "^.+@.+\\..+$" } }
      ]
    },
    validationAction: "discard"
  }
};

// Define sink – store validated data to Atlas
let sink = {
  $merge: {
    into: {
      connectionName: "validatedDataConnection",
      db: "validatedDB",
      coll: "validatedCollection"
    }
  }
};

// Full pipeline
let processor = [source, validate, sink];

// Create persistent processor
sp.createStreamProcessor("validatedProcessor", processor);

// Start processor
sp.validatedProcessor.start()
