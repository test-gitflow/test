import TestClick from "./TestClick";
import { render, screen } from "@testing-library/react";

describe("<TestClick />", () => {
  it("render num", () => {
    render(<TestClick />);
    const num = screen.getByText("num");
    expect(num).toBeInTheDocument();
  });
});
