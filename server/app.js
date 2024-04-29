// imports
const path = require("path");
const express = require("express");
const cors = require("cors");
const connectionToMongoDB = require("./config/database");
const prisonersRoutes = require("./routes/prisoners");

// server inintialize
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/prisoners", prisonersRoutes);
app.use(express.static(path.join(__dirname, 'public')))

// database
const myDataBase = "myDB";
const url = `mongodb://localhost:27017/${myDataBase}`;

connectionToMongoDB(url);

// server export
module.exports = app;