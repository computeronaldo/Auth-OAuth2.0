const mongoose = require("mongoose");

require("dotenv").config();
const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;

mongoose
  .connect(MONGODB_CONNECTION_URI)
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err);
  });
