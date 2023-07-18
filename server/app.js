const express = require("express");
const app = express();
const cors = require("cors");
const getweatherRouter = require("./router");

//middlewares
app.use(cors());
app.use(express.json());

//get weather api
app.use("/", getweatherRouter);

module.exports = app;
