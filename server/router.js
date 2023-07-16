const express = require("express");
const router = express.Router();

router.get("/getweather/:zipid/:countryid", async (request, response, next) => {
  try {
    const { zipid, countryid } = request.params;
    let data = await fetch(
      `https://api.openweathermap.org/geo/1.0/zip?zip=${zipid},${countryid}&appid=2247808d1c169cf4f00e6f20b7cbcad8`
    );
    data = await data.json();
    let weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=2247808d1c169cf4f00e6f20b7cbcad8`
    );
    weather = await weather.json();
    if (weather.cod === 200) {
      response.status(200).json(weather);
    } else {
      response.status(400).json({ message: "Invalid or Incorrect request" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
