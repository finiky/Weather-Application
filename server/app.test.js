const request = require("supertest");
const app = require("./app");

describe("Given that the '/getweather/zipid/countryid' route exists", () => {
  test("When correct zipid and countryid are provided, API responds with 200 status and respective weather data", async () => {
    let expectedData = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=19.1941&lon=73.0002&appid=2247808d1c169cf4f00e6f20b7cbcad8"
    );
    expectedData = await expectedData.json();

    const response = await request(app)
      .get("/getweather/400602/IN")
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedData);
  });

  test("When incorrecrt zipid is provided, API responds with status 400 and an error message ", async () => {
    const expectedData = {
      message: "Invalid or Incorrect request",
    };
    const response = await request(app).get("/getweather/lll/IN").set("Accept", "application/json");
    expect(response.status).toBe(400);
    expect(response.body).toEqual(expectedData);
  });

  test("When incorrecrt countryid is provided, API responds with status 400 and an error message ", async () => {
    const expectedData = {
      message: "Invalid or Incorrect request",
    };
    const response = await request(app).get("/getweather/400602/INDYddd").set("Accept", "application/json");
    expect(response.status).toBe(400);
    expect(response.body).toEqual(expectedData);
  });
});
