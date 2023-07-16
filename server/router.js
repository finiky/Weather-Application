const express = require("express");
const router = express.Router();

router.get("/getweather/:zipid/:countryid", async (request, response, next) => {
  try {
    const baseUrl = "https://api.openweathermap.org/geo/1.0/zip?zip=";
    const { zipid, countryid } = request.params;
    const apiId = "&appid=2247808d1c169cf4f00e6f20b7cbcad8";
    const apiUrl = baseUrl + zipid + "," + countryid + apiId;
    let data = await fetch(apiUrl);
    data = await data.json();
    response.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
