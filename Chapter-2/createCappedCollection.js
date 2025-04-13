// Create a capped collection with a 5KB size limit and max 10 documents

db.createCollection("logs", {
  capped: true,
  size: 5120,
  max: 10
});

// Insert a test log entry
db.logs.insertOne({ message: "App started", ts: new Date() })
