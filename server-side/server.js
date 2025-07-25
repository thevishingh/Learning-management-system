// importting require assets
require("dotenv").config();

// Define packages
const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");

// Express Application
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Cors Policy
Cors({
  origin: process.env.CLIENT_URL,
  method: ["GET", "DELETE", "PUT", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

// App Middleware
app.use(express.json());

// database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

// Routes Configuration

// error handling
app.use((error, req, res, next) => {
  console.log(error.stack);
  res.status(500).json({
    success: false,
    message: "Something Went Wrong..!!😢",
  });
});

// start the server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
