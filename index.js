const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
server.use(cors());
server.use(bodyParser.json());
const mongoose = require("mongoose");
const Dashboard = require("./mongoose/mongooseShema");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

server.get("/api", async (req, res) => {
  try {
    const data = await Dashboard.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});
server.listen(PORT, () => {
  console.log("yes Server is here");
});
