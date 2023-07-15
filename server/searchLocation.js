module.exports = (app) => {
  app.get("/getweather", async (request, response, next) => {
    try {
      const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
      const { zipcode } = request.params;
      const apiId = "&appid=<2247808d1c169cf4f00e6f20b7cbcad8>&units=imperial";

      if (zipcode.length !== 5) {
        response.status(400).json({ message: "Kindly enter a valid Zipcode." });
      }

      const userLocation = (url1, url2, zipcode) => url1 + zipcode + url2;
      const apiUrl = userLocation(baseUrl, apiId, zipcode);
      const weather = await fetch(apiUrl);
      response.status(200).json({ weather });
    } catch (error) {
      next(error);
    }
  });
};
