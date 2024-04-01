import { TetrisPiece } from "./types";

export function createPiece(type: string): TetrisPiece {
  switch (type) {
    case "I":
      return [[1, 1, 1, 1]];
    case "O":
      return [
        [1, 1],
        [1, 1],
      ];
    case "T":
      return [
        [0, 1, 0],
        [1, 1, 1],
      ];
    case "S":
      return [
        [0, 1, 1],
        [1, 1, 0],
      ];
    case "Z":
      return [
        [1, 1, 0],
        [0, 1, 1],
      ];
    case "J":
      return [
        [1, 0, 0],
        [1, 1, 1],
      ];
    case "L":
      return [
        [0, 0, 1],
        [1, 1, 1],
      ];
    default:
      throw new Error("Invalid piece type");
  }
}
