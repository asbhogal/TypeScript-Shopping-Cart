import { render, screen } from "@testing-library/react";
import App from "./App";

test("jest is working", () => {
  expect(true).toBe(true);
});

// Tests that the Navbar component is rendered
it("test_render_navbar", () => {
  render(<App />);
  const navbar = screen.getByRole("navigation");
  expect(navbar).toBeInTheDocument();
});
