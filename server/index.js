// require necessary Files
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// app initialize
const app = express();
const port = process.env.PORT || 5000;

// middleware configuration
app.use(cors());
app.use(express.json());

// Testing route
app.get("/", (req, res) => {
  res.send("PawMart Server is Running");
});

// For local testing
app.listen(port, () => {
  console.log(`PawMart Server is running on Port: ${port}`);
});
