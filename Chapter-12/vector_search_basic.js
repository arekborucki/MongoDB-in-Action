// vector_search_basic.js
// Node.js script that performs a basic vector search using the MongoDB aggregation pipeline.

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
          limit: 5
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

    console.log("Vector search results:", results);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run()
