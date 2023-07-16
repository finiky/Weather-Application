const express = require("express");
const router = express.Router();

router.get("/getweather/:zipid/:countryid", async (request, response, next) => {
  const { zipid, countryid } = request.params;

  //add logic for sending an error response if the zipid contains a letter
  // add logic for sending an error response if the countryid contains a number
  // this check in the start itself can save from making an api call and save time by providing a faster response
  let data = await fetch(
    `https://api.openweathermap.org/geo/1.0/zip?zip=${zipid},${countryid}&appid=2247808d1c169cf4f00e6f20b7cbcad8`
  );
  data = await data.json();
  let weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=2247808d1c169cf4f00e6f20b7cbcad8`
  );
  weather = await weather.json();
  if (
    weather.name === "Podgórzyn" ||
    weather.cod === 400 ||
    weather.message === "wrong latitude"||
    weather.message === "Nothing to geocode"
  ) {
    return response
      .status(400)
      .json({ message: "Invalid or Incorrect request" });
  }
  return response.status(200).json(weather);
});

module.exports = router;
