const mongoose = require("mongoose");
const ApiSchema = new mongoose.Schema(
  {
    _id:mongoose.Schema.Types.ObjectId,
    end_year: String || null,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String || nul,
    impact: String || null,
    added: Date, 
    published: Date, 
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
  },
  { collection: "Dashboard" }
);

const Dashboard = mongoose.model("Dashboard",ApiSchema,"Dashboard-Data");

module.exports = Dashboard;
