const express = require("express");
const router = express.Router();

router.get("/getweather/:zipid/:countryid", async (request, response) => {
  const { zipid, countryid } = request.params;
  let data = await fetch(
    `https://api.openweathermap.org/geo/1.0/zip?zip=${zipid},${countryid}&appid=2247808d1c169cf4f00e6f20b7cbcad8`
  );
  data = await data.json();
  if (data.cod === "404") {
    return response
      .status(404)
      .json({ message: "Invalid or Incorrect zipcode or the countrycode" });
  }
  if (data.zip) {
    let weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=2247808d1c169cf4f00e6f20b7cbcad8`
    );
    weather = await weather.json();
    return response.status(200).json(weather);
  }
});

module.exports = router;
