import { render, screen } from "@testing-library/react";
import { Shop } from "./Shop";

// Tests that the Shop function renders a SimpleGrid component with the correct props
it("renders_simple_grid_with_correct_props", () => {
  render(<Shop />);
  const simpleGrid = screen.getByRole("grid");
  expect(simpleGrid).toBeInTheDocument();
  expect(simpleGrid).toHaveStyle({ position: "relative" });
  expect(simpleGrid).toHaveStyle({ top: "65px" });
  expect(simpleGrid).toHaveStyle({ minChildWidth: "265px" });
  expect(simpleGrid).toHaveStyle({ gap: "20px" });
  expect(simpleGrid).toHaveStyle({ padding: "20px" });
});
