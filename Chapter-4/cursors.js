// Manual cursor iteration in async function (Node.js / mongosh)
async function manualIteration() {
  const cursorVariable = db.routes.find();
  while (await cursorVariable.hasNext()) {
    console.log(await cursorVariable.next());
  }
}

manualIteration()

// Fetch all documents as an array (not recommended for large datasets)
async function fetchAllDocuments() {
  const cursor = db.routes.find({});
  const allValues = await cursor.toArray();
  console.log(allValues);
}

fetchAllDocuments()
