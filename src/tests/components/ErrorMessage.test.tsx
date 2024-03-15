import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "../../components/ErrorMessage";

describe("ErrorMessage", () => {
  it("should render error message", () => {
    render(<ErrorMessage />);

    expect(screen.getByText("Oops, something went wrong!")).toBeInTheDocument();
  });
});
