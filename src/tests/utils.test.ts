import { calculateAspectRatio, formatWeeksOnList, pluralize } from "../utils";

describe("calculateAspectRatio", () => {
  test("should calculate aspect ratio", () => {
    expect(calculateAspectRatio(100, 200)).toEqual(0.5);
  });

  test("should calculate aspect ratio when height is equal to 0", () => {
    expect(calculateAspectRatio(100, 0)).toEqual(0);
  });
});

describe("formatWeeksOnList", () => {
  test("should format weeks on list when weeks is equal to 1", () => {
    expect(formatWeeksOnList(1)).toEqual("New");
  });

  test("should format weeks on list when weeks is greater than 1", () => {
    expect(formatWeeksOnList(5)).toEqual("5 Weeks");
  });
});

describe("pluralize", () => {
  test("should pluralize word if quantity is 0", () => {
    expect(pluralize("Week", 0)).toEqual("Weeks");
  });

  test("should pluralize word if quantity is greater than 1", () => {
    expect(pluralize("Week", 7)).toEqual("Weeks");
  });

  test("should return singular word if quantity is 1", () => {
    expect(pluralize("Week", 1)).toEqual("Week");
  });
});
