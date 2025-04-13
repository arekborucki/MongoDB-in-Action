// search_meta_count.js
// This script uses the $searchMeta stage to return only the metadata about the search
// It shows the total number of documents matching the query

const { MongoClient } = require("mongodb");

// Replace with your Atlas connection URI
const uri = "mongodb+srv://<username>:<password>@mongodb-in-action.a7niyd4.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db("sample_training").collection("inspections");

    const pipeline = [
      {
        $searchMeta: {
          index: "MongoDB-in-Action",
          text: {
            query: "Deli",
            path: "business_name"
          }
        }
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    console.log("Search Metadata Result:");
    console.dir(result, { depth: null });
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
