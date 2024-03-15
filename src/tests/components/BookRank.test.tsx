import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookRank from "../../components/BookRank";

describe("BookRank", () => {
  it("it should have class rank-high for ranking 1st", () => {
    render(<BookRank rank={1} />);

    expect(screen.getByText("# 1")).toHaveClass("rank-high");
  });

  it("it should have class rank-high for ranking 5th", () => {
    render(<BookRank rank={5} />);

    expect(screen.getByText("# 5")).toHaveClass("rank-high");
  });

  it("it should have class rank-mid for ranking 6th", () => {
    render(<BookRank rank={6} />);

    expect(screen.getByText("# 6")).toHaveClass("rank-mid");
  });

  it("it should have class rank-mid for ranking 10th", () => {
    render(<BookRank rank={10} />);

    expect(screen.getByText("# 10")).toHaveClass("rank-mid");
  });

  it("it should have class rank-low for ranking 11th", () => {
    render(<BookRank rank={11} />);

    expect(screen.getByText("# 11")).toHaveClass("rank-low");
  });

  it("it should have class rank-low for ranking 15th", () => {
    render(<BookRank rank={15} />);

    expect(screen.getByText("# 15")).toHaveClass("rank-low");
  });
});
