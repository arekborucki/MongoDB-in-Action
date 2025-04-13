// search_wildcard.js
// This script demonstrates how to use the wildcard operator in Atlas Search
// to match terms with flexible or unknown character positions.

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
          wildcard: {
            path: "business_name",
            query: "*L?CE*", // * = any characters, ? = any single character
            allowAnalyzedField: true
          }
        }
      },
      {
        $set: {
          score: { $meta: "searchScore" }
        }
      },
      {
        $sort: {
          score: -1
        }
      },
      {
        $limit: 2
      },
      {
        $unset: ["_id", "address", "date"]
      }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.log("Wildcard search result:", results);
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
