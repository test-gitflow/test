import TestClick from "@/components/TestClick";
import { render, screen } from "@testing-library/react";

describe("<TestClick />", () => {
  it("render num", () => {
    const { container } = render(<TestClick />);
    const num = screen.getByText("num");
    expect(num).toBeInTheDocument();
  });
});
