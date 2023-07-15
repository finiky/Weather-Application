const express = require("express");
const app = express();
const cors = require("cors");



app.use(cors);
app.use(express.json());

app.use("/", () => {
    return response.status(200).json({message: "I am live"});
});


module.exports = app;