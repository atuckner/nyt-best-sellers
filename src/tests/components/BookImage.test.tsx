import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookImage from "../../components/BookImage";

describe("BookImage", () => {
  it("it should have class rank-high for ranking 1st", () => {
    render(
      <BookImage
        imageHeight={200}
        imageWidth={200}
        maxWidth="250px"
        imageUrl="https://test.image"
      />,
    );

    expect(screen.getByRole("img")).toHaveStyle({
      aspectRatio: 200 / 200,
      maxWidth: "250px",
    });
  });
});
