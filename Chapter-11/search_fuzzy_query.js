// search_fuzzy_query.js
// This script demonstrates fuzzy text search using Atlas Search.
// It allows for typos in the search term using the fuzzy option.

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
          text: {
            query: "BUILNG TO SERV INC", // intentionally misspelled
            path: "business_name",
            fuzzy: {
              maxEdits: 2, // allow up to 2 typos
              prefixLength: 1 // first character must match exactly
            }
          }
        }
      },
      { $limit: 2 },
      {
        $set: {
          business_name: "$business_name",
          date: "$date",
          result: "$result",
          sector: "$sector",
          address: "$address",
          score: { $meta: "searchScore" }
        }
      },
      { $unset: ["_id"] }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.log("Fuzzy search results:", results);
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
