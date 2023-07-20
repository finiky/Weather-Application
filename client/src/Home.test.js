import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("Home component has rendered correctly", () => {
  test("Input Element 'Zip Code' to be in the documwent", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputElement_1 = screen.getByLabelText(/Zip Code/i);
    expect(inputElement_1).toBeInTheDocument();
  });

  test("Input Element 'Country Code' to be in the document", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputElement_2 = screen.getByLabelText(/Country Code/i);
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
  test("Button Element to be in the document", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
