const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(cors);
app.use(express.json());

//testing the server response
app.get("/checking", (request, response) => {
  response.status(200).json({ message: "Weather Application is live" });
});

module.exports = app;
