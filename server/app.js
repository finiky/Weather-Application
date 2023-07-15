const express = require("express");
const app = express();

//middlewares
app.use(express.json());

//testing the server response
app.get("/", (req, res) => {
  res.send("Welcome to the Weather App!");
});

module.exports = app;
