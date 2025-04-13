// 💡 This script connects to a MongoDB Atlas cluster and routes reads to analytics nodes.
// 👉 Use readPreferenceTags to isolate BI/ETL queries from your main workload.

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<USERNAME>:<PASSWORD>@your-cluster.mongodb.net/test" +
  "?readPreference=secondary" +
  "&readPreferenceTags=nodeType:ANALYTICS" +
  "&readConcernLevel=local";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("sample_db");
    const result = await db.collection("orders").find({ status: "pending" }).toArray();
    console.log("Analytics node results:", result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
