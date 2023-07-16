const express = require("express");
const app = express();
const getweatherRouter = require("./router");

//middlewares
app.use(express.json());

//get weather api
app.use("/", getweatherRouter);

module.exports = app;
