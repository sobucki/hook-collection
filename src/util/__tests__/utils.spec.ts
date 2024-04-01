import { describe, it, expect } from "vitest";
import { createFilledMatrix } from "../utils";

describe("createFilledMatrix", () => {
  it("should create a 2D array with the specified number of rows, columns, and fill value", () => {
    const rows = 2;
    const columns = 3;
    const fillValue = "x";
    const expectedMatrix = [
      ["x", "x", "x"],
      ["x", "x", "x"],
    ];

    const result = createFilledMatrix<string>(rows, columns, fillValue);

    expect(result).toEqual(expectedMatrix);
  });

  it("should throw an error if rows or columns are not positive integers", () => {
    expect(() => createFilledMatrix<number>(-1, 4, 0)).toThrow(
      "Rows and columns must be positive integers."
    );
    expect(() => createFilledMatrix<number>(3, 0, 0)).toThrow(
      "Rows and columns must be positive integers."
    );
    expect(() => createFilledMatrix<number>(0, -2, 0)).toThrow(
      "Rows and columns must be positive integers."
    );
  });
});
