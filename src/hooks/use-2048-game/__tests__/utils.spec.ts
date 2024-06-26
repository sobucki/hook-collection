import { removeSpaces, sumRow, transposeMatrix } from "../utils";

describe("removeSpaces", () => {
  it("should remove spaces of array", () => {
    expect(removeSpaces([0, 0, 0, 2])).toEqual([2, 0, 0, 0]);
    expect(removeSpaces([0, 2, 0, 2, 0])).toEqual([2, 2, 0, 0, 0]);
    expect(removeSpaces([2, 4, 0, 0, 0, 2, 2])).toEqual([2, 4, 2, 2, 0, 0, 0]);
    expect(removeSpaces([0])).toEqual([0]);
    expect(removeSpaces([])).toEqual([]);
    expect(removeSpaces([2])).toEqual([2]);
  });
});

describe("sumRow", () => {
  it("should sum equal values to left from a array", () => {
    expect(sumRow([2, 2, 0, 0])).toEqual([4, 0, 0, 0]);
    expect(sumRow([2, 0, 0, 2])).toEqual([4, 0, 0, 0]);
    expect(sumRow([0, 0, 2, 2])).toEqual([4, 0, 0, 0]);
    expect(sumRow([2, 4, 0, 0])).toEqual([2, 4, 0, 0]);
    expect(sumRow([2, 4, 2, 2])).toEqual([2, 4, 4, 0]);
    expect(sumRow([8, 4, 2, 2])).toEqual([8, 4, 4, 0]);
    expect(sumRow([16, 16, 16, 16])).toEqual([32, 32, 0, 0]);
    expect(sumRow([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    expect(sumRow([0, 0, 4, 4])).toEqual([8, 0, 0, 0]);
  });
});

describe("transposeMatrix", () => {
  it("should transpose correctly a 2D array", () => {
    expect(
      transposeMatrix([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ])
    ).toEqual([
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [4, 8, 12, 16],
    ]);
  });
});
