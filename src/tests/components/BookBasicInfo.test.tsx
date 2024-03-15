import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookBasicInfo from "../../components/BookBasicInfo";

describe("BookBasicInfo", () => {
  it("should display the rank, title, author and weeks on list text for a new book", () => {
    render(
      <BookBasicInfo
        rank={1}
        title="Test Book"
        author="Test Author"
        weeks_on_list={1}
      />,
    );

    expect(screen.getByText("# 1")).toBeInTheDocument();
    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("by Test Author")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("should display the rank, title, author and weeks on list text for an existing book", () => {
    render(
      <BookBasicInfo
        rank={3}
        title="Test Book"
        author="Test Author"
        weeks_on_list={25}
      />,
    );

    expect(screen.getByText("# 3")).toBeInTheDocument();
    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("by Test Author")).toBeInTheDocument();
    expect(screen.getByText("25 Weeks")).toBeInTheDocument();
  });
});
