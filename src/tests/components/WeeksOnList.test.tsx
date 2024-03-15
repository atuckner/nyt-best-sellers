import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeeksOnList from "../../components/WeeksOnList";

describe("WeeksOnList", () => {
  it("should return New for books with 1 week on the list", () => {
    render(<WeeksOnList weeks={1} />);

    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("should return number of weeks for books with over 1 week on the list", () => {
    render(<WeeksOnList weeks={25} />);

    expect(screen.getByText("25 Weeks")).toBeInTheDocument();
  });
});
