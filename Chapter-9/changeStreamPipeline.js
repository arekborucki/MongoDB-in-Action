// Watches for changes in the `sessions` collection and filters only changes from user_id "12345".
// Adds an extra field to each change event using an aggregation pipeline.
const { MongoClient } = require('mongodb');

const uri = "<your MongoDB connection string>";
const client = new MongoClient(uri, { serverApi: '1' });

async function monitorChangeStream() {
  await client.connect();
  const collection = client.db("sample_mflix").collection("sessions");

  const pipeline = [
    { $match: { "fullDocument.user_id": "12345" } },
    { $addFields: { newField: "this is an added field!" } }
  ];

  const changeStream = collection.watch(pipeline);

  changeStream.on("change", (event) => {
    console.log("Filtered change event:", event);
  });
}

monitorChangeStream()
