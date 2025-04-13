exports = async function(changeEvent) {
  // Log the entire change event for debugging
  const fullChangeEvent = EJSON.stringify(changeEvent, null, 2);
  console.log(`Full Change Event: ${fullChangeEvent}`);

  if (!changeEvent || Object.keys(changeEvent).length === 0) {
    console.error('No change event data received.');
    return;
  }

  const { operationType, documentKey, updateDescription } = changeEvent;

  if (!operationType || !documentKey) {
    console.error('Missing essential changeEvent fields.');
    return;
  }

  const mongodb = context.services.get("MongoDB-in-Action");
  const logsCollection = mongodb.db("sample_restaurants").collection("restaurants_logs");

  const logEntry = {
    operation: operationType,
    documentId: documentKey._id,
    timestamp: new Date()
  };

  if (operationType === 'update' && updateDescription?.updatedFields) {
    logEntry.updatedFields = updateDescription.updatedFields;
  }

  await logsCollection.insertOne(logEntry);
  console.log(`Log entry inserted: ${JSON.stringify(logEntry)}`);
}
