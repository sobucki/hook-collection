import { describe, it, expect } from "vitest";
import { createFilledMatrix, generateRandomInteger } from "../utils";

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

describe("generateRandomInteger", () => {
  it("should generate a number between max and min", () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = generateRandomInteger(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  it("should generate only integers", () => {
    const min = 5;
    const max = 15;
    for (let i = 0; i < 100; i++) {
      const result = generateRandomInteger(min, max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("should handle when min and max are same value", () => {
    const min = 50;
    const max = 50;
    const result = generateRandomInteger(min, max);
    expect(result).toBe(min);
  });

  it("should round the parameters when inform a not integer value", () => {
    const min = 1.5;
    const max = 5.7;
    for (let i = 0; i < 100; i++) {
      const result = generateRandomInteger(min, max);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(5);
    }
  });

  it("should handle negative range", () => {
    const min = -10;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = generateRandomInteger(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  it("should throw an error when min is greater than max", () => {
    const min = 10;
    const max = 1;
    expect(() => generateRandomInteger(min, max)).toThrow(
      "Min value cannot be greater than max value"
    );
  });

  it("should handle extreme values", () => {
    const min = Number.MIN_VALUE;
    const max = Number.MAX_VALUE;
    for (let i = 0; i < 100; i++) {
      const result = generateRandomInteger(min, max);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });
});
