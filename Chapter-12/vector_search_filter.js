// vector_search_filter.js
// Node.js script performing vector search with additional filters on genres and runtime.

const { MongoClient } = require("mongodb");

async function run() {
  const uri = "your_mongodb_connection_string";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("sample_mflix");
    const collection = db.collection("embedded_movies");

    const results = await collection.aggregate([
      {
        $vectorSearch: {
          index: "MongoDB-in-Action-VectorSearchIndex",
          path: "plot_embedding",
          queryVector: [/* your embedding vector here */],
          numCandidates: 150,
          exact: false,
          limit: 5,
          filter: {
            $or: [
              { genres: "Action" },
              { runtime: { $lt: 120 } }
            ]
          }
        }
      },
      {
        $project: {
          _id: 0,
          title: 1,
          plot: 1,
          score: { $meta: "vectorSearchScore" }
        }
      }
    ]).toArray();

    console.log("Filtered vector search results:", results);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run()
