// require necessary Files
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// app initialize
const app = express();
const port = process.env.PORT || 5000;

// middleware configuration
app.use(cors());
app.use(express.json());

// --- MongoDB connection logic ---
const uri = process.env.MONGODB_URI;
// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // ------------------
    //  (API Endpoints)
    // ------------------

    // Testing route
    app.get("/", (req, res) => {
      res.send("PawMart Server is Running and connected to MongoDB");
    });
  } finally {
  }
}
run().catch(console.dir);

// For local testing
app.listen(port, () => {
  console.log(`PawMart Server is running on Port: ${port}`);
});
