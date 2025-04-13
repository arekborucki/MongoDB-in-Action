// 💡 This script performs a write to a multi-region MongoDB Atlas cluster
// 👉 It uses custom writeConcern to ensure propagation to 3 regions.

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://<USERNAME>:<PASSWORD>@your-cluster.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("flights");

    const result = await db.collection("routes").insertOne(
      {
        airline: { id: 410, name: "Lufthansa", alias: "LH", iata: "DLH" },
        src_airport: "MUC",
        dst_airport: "JFK"
      },
      { writeConcern: { w: "threeRegions" } }
    );

    console.log("Write result:", result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir)
