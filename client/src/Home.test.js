import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import GetWeather from './GetWeather';
import Home from "./Home";

describe("Home component has rendered correctly", () => {
  test("Input Element 'Zip Code' to be in the documwent", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputElement = screen.getByRole("textbox", { name: /Zip Code/i });
    expect(inputElement).toBeInTheDocument();
  });

  test("Input Element 'Country Code' to be in the document", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputElement_2 = screen.getByRole("textbox", {
      name: /Country Code/i,
    });
    expect(inputElement_2).toBeInTheDocument();
  });

  test("Heading Element 'Weather Agent' to be in the document", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Weather Agent");
    expect(headingElement).toBeInTheDocument();
  });
  test("Button Element 'Weather Report' to be in the document", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const buttonElement = screen.getByText(/Weather Report/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should navigate to getweather/400601/IN upon providing a zip code and a country code", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputZip = screen.getByLabelText(/Zip Code/i);
    const inputCountry = screen.getByLabelText(/Country Code/i);
    fireEvent.change(inputZip, {
      target: { value: "400601" },
    });
    expect(inputZip).toHaveValue("400601");
    fireEvent.change(inputCountry, {
      target: { value: "IN" },
    });
    expect(inputCountry).toHaveValue("IN");
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(window.location.href).toBe("http://localhost/getweather/400601/IN");
  });
});
