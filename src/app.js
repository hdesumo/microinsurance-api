const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes (vides pour l’instant)
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "MicroInsurance API is running" });
});

module.exports = app;
