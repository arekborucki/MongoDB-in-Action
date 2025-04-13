// Connects to MongoDB and watches the `sessions` collection for real-time changes using the Node.js driver.
const { MongoClient } = require('mongodb');

const uri = "<your MongoDB connection string>";
const client = new MongoClient(uri, { serverApi: '1' });

async function monitorChangeStream() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const sessions = database.collection("sessions");

    const changeStream = sessions.watch();
    console.log("Listening for changes in the sessions collection...");

    await changeStream.forEach(change => {
      console.log("Received a change in the sessions collection:", change);
    });
  } catch (error) {
    console.error("Error in change stream:", error);
  } finally {
    await client.close();
  }
}

monitorChangeStream()
