import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookBuyLinks from "../../components/BookBuyLinks";

describe("BookBasicInfo", () => {
  it("should render the link", () => {
    render(
      <BookBuyLinks
        buyLinks={[
          { name: "Amazon", url: "https://test.url" },
          { name: "Indie Bookstore", url: "https://testbookstore.url" },
        ]}
      />,
    );

    expect(screen.getByRole("link", { name: "Amazon" })).toHaveAttribute(
      "href",
      "https://test.url",
    );
    expect(
      screen.getByRole("link", { name: "Indie Bookstore" }),
    ).toHaveAttribute("href", "https://testbookstore.url");
  });
});
