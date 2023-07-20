import { render, screen } from "@testing-library/react";
import GetWeather from "./GetWeather";

test("GetWeather has rendered Content is loading... paragraph element when no input is provided", () => {
  render(<GetWeather />);
  const paragraphElement = screen.getByText("Content is loading...");
  expect(paragraphElement).toBeInTheDocument();
});
