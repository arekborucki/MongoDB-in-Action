const { MongoClient } = require("mongodb");
const uri = "<connection string uri>";
const client = new MongoClient(uri);

const run = async () => {
  try {
    const database = client.db("sample_training");
    const routes = database.collection("routes");
    const query = { src_airport: "JFK", "airline.id": 3201 };
    const route = await routes.findOne(query);
    console.log(route);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

run().catch(console.error)
