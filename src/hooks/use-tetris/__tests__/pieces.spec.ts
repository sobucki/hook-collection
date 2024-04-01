import { describe, it, expect } from "vitest";
import { createPiece } from "../pieces";

describe("createPiece", () => {
  it("should create an I piece", () => {
    const expectedPiece = [[1, 1, 1, 1]];

    const result = createPiece("I");

    expect(result).toEqual(expectedPiece);
  });

  it("should create an O piece", () => {
    const expectedPiece = [
      [1, 1],
      [1, 1],
    ];

    const result = createPiece("O");

    expect(result).toEqual(expectedPiece);
  });

  it("should create a T piece", () => {
    const expectedPiece = [
      [0, 1, 0],
      [1, 1, 1],
    ];

    const result = createPiece("T");

    expect(result).toEqual(expectedPiece);
  });

  it("should create an S piece", () => {
    const expectedPiece = [
      [0, 1, 1],
      [1, 1, 0],
    ];

    const result = createPiece("S");

    expect(result).toEqual(expectedPiece);
  });

  it("should create a Z piece", () => {
    const expectedPiece = [
      [1, 1, 0],
      [0, 1, 1],
    ];

    const result = createPiece("Z");

    expect(result).toEqual(expectedPiece);
  });

  it("should create a J piece", () => {
    const expectedPiece = [
      [1, 0, 0],
      [1, 1, 1],
    ];

    const result = createPiece("J");

    expect(result).toEqual(expectedPiece);
  });

  it("should create an L piece", () => {
    const expectedPiece = [
      [0, 0, 1],
      [1, 1, 1],
    ];

    const result = createPiece("L");

    expect(result).toEqual(expectedPiece);
  });

  it("should throw an error for an invalid piece type", () => {
    expect(() => createPiece("X")).toThrow("Invalid piece type");
  });
});
