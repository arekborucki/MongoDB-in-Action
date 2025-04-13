// search_text_query.js
// This script performs a compound full-text search using Atlas Search in MongoDB Atlas.
// It searches for documents that match multiple conditions using the $search stage with the compound operator.

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
          compound: {
            must: [
              {
                text: {
                  query: "food",
                  path: "business_name"
                }
              },
              {
                text: {
                  query: "PASS",
                  path: "result"
                }
              },
              {
                text: {
                  query: "127",
                  path: "sector"
                }
              }
            ]
          }
        }
      },
      {
        $set: {
          score: { $meta: "searchScore" }
        }
      }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.log("Search results:", results);
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
