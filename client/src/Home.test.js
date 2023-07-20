import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test("'Zip Code' input to be in the document", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const inputElement_1 = screen.getByLabelText(/Zip Code/i);
  expect(inputElement_1).toBeInTheDocument();
});

test("'Country Code' input to be in the document", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const inputElement_2 = screen.getByLabelText(/Country Code/i);
  expect(inputElement_2).toBeInTheDocument();
});

test("'Weather Report' button to be in the document", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test(`'Zip Code' input in the document`, () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const inputElement = screen.getByPlaceholderText("Zip Code");
  expect(inputElement).toBeInTheDocument();
});

test("Weather Agent heading is in the document", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Weather Agent");
  expect(headingElement).toBeInTheDocument();
});
