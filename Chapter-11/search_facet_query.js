// search_facet_query.js
// This script performs a faceted search using Atlas Search on a MongoDB collection
// It groups the results by status, year, and business sector using $facet

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
            query: "HOT DOG",
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
          ResultsByStatus: [
            { $group: { _id: "$result", count: { $sum: 1 } } }
          ],
          ResultsByYear: [
            {
              $group: {
                _id: { $year: { $dateFromString: { dateString: "$date" } } },
                count: { $sum: 1 }
              }
            }
          ],
          SectorSummary: [
            { $sortByCount: "$sector" }
          ]
        }
      },
      { $limit: 1 }
    ];

    const results = await collection.aggregate(pipeline).toArray();
    console.dir(results, { depth: null });
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
