// require necessary Files
const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api");
require("dotenv").config();

// app initialize
const app = express();
const port = process.env.PORT || 5000;

// middleware configuration
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

// Testing route
app.get("/", (req, res) => {
  res.send("PawMart Server is Running");
});

// For local testing
if (require.main === module) {
  app.listen(port, () => {
    console.log(`PawMart Server is running on Port: ${port}`);
  });
}

// For Vercel deployment
module.exports = app;
