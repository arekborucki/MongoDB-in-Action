// search_proximity.js
// This script demonstrates a proximity search using the phrase operator in Atlas Search.
// It looks for documents where specified words appear close to each other.

const { MongoClient } = require("mongodb");

// Replace with your connection string
const uri = "mongodb+srv://<username>:<password>@mongodb-in-action.a7niyd4.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db("sample_training").collection("inspections");

    const pipeline = [
      {
        $search: {
          index: "MongoDB-in-Action",
          phrase: {
            query: ["food", "license"], // terms to match
            path: "business_name", // field to search
            slop: 3 // allows up to 3 words between the terms
          }
        }
      },
      { $limit: 1 },
      {
        $set: {
          business_name: "$business_name",
          result: "$result",
          sector: "$sector"
        }
      },
      { $unset: ["_id", "address", "date"] }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.log("Proximity search result:", results);
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
