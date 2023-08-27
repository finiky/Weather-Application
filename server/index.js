const app = require("./app");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 10000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Listening at port", port);
});
