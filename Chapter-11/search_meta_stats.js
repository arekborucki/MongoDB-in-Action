// search_meta_stats.js
// This script performs an Atlas Search query and returns both search results and metadata
// It uses the $$SEARCH_META variable inside a $facet to separate document data, facets, and meta info

const { MongoClient } = require("mongodb");

// Replace with your MongoDB Atlas URI
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
            query: "smok skop",
            path: "business_name",
            fuzzy: {
              maxEdits: 1,
              prefixLength: 3
            }
          }
        }
      },
      {
        $facet: {
          docs: [
            { $limit: 5 },
            {
              $set: {
                business_name: "$business_name",
                date: "$date",
                result: "$result",
                sector: "$sector",
                address: "$address"
              }
            },
            { $unset: ["_id"] }
          ],
          resultFacets: [
            {
              $bucketAuto: {
                groupBy: "$result",
                buckets: 5
              }
            }
          ],
          meta: [
            { $replaceWith: "$$SEARCH_META" },
            { $limit: 1 }
          ]
        }
      }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.dir(results, { depth: null });
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
