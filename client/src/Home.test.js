import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test("Home component has returned correct elements in the document", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const inputElement_1 = screen.getByLabelText(/Zip Code/i);
  expect(inputElement_1).toBeInTheDocument();
  const headingElement = screen.getByText("Weather Agent");
  expect(headingElement).toBeInTheDocument();
  const inputElement_2 = screen.getByLabelText(/Country Code/i);
  expect(inputElement_2).toBeInTheDocument();
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
  const inputElement = screen.getByPlaceholderText("Zip Code");
  expect(inputElement).toBeInTheDocument();
});