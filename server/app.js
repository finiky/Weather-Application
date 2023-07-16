const express = require("express");
const app = express();
const getweather = require("./router");

//middlewares
app.use(express.json());

//get weather api
app.use("/", getweather);

module.exports = app;
