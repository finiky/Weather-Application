const app = require("./app");
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Listening at 5000");
});
