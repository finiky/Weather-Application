import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import GetWeather from "./GetWeather";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

it("should navigate to getweather/400601/IN upon providing a zip code and a country code", () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const inputZip = screen.getByLabelText(/Zip Code/i);
  const inputCountry = screen.getByLabelText(/Country Code/i);
  fireEvent.change(inputZip, {
    target: { value: "400601" },
  });
  fireEvent.change(inputCountry, {
    target: { value: "IN" },
  });
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(window.location.href).toBe("http://localhost/getweather/400601/IN");
});


