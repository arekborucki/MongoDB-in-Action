/**
 * MongoDB Atlas Authentication Demo
 * Demonstrates connection to a MongoDB Atlas cluster using:
 * - SCRAM-SHA-256
 * - x.509 Certificates
 * - AWS IAM authentication
 *
 * Requires:
 * - MongoDB Node.js Driver
 *   Install with: npm install mongodb
 */

const { MongoClient } = require("mongodb");

// ---------------------------
// 🔐 SCRAM-SHA-256 Example
// ---------------------------
async function connectWithSCRAM() {
  const uri = "mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Connected using SCRAM-SHA-256");
    const db = client.db("sample_training");
    const result = await db.collection("routes").findOne();
    console.log("Sample data:", result);
  } finally {
    await client.close();
  }
}

// ---------------------------
// 🔐 X.509 Certificate Example
// ---------------------------
async function connectWithX509() {
  const uri = "mongodb+srv://cluster0.mongodb.net/?authMechanism=MONGODB-X509&tls=true&retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    tlsCertificateKeyFile: "./client.pem", // Your X.509 cert
    tlsCAFile: "./ca.pem" // CA file if needed
  });

  try {
    await client.connect();
    console.log("✅ Connected using x.509 certificate");
  } finally {
    await client.close();
  }
}

// ---------------------------
// 🔐 AWS IAM Authentication Example
// ---------------------------
async function connectWithAWSIAM() {
  const uri = "mongodb+srv://cluster0.mongodb.net/?authMechanism=MONGODB-AWS";

  const client = new MongoClient(uri, {
    authMechanismProperties: {
      AWS_SESSION_TOKEN: process.env.AWS_SESSION_TOKEN,
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    },
    authSource: "$external",
  });

  try {
    await client.connect();
    console.log("✅ Connected using AWS IAM authentication");
  } finally {
    await client.close();
  }
}

// Run all examples
(async () => {
  console.log("Running authentication demos...\n");

  // Uncomment to run desired method:
  // await connectWithSCRAM();
  // await connectWithX509();
  // await connectWithAWSIAM();
})()
