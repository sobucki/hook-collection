import { createFilledMatrix, generateRandomInteger } from "../../util/utils";
import { BoardTiles, MoveBlockParams } from "./types";
import { sumRow, transposeMatrix } from "./utils";

export const initializeBoard = (): BoardTiles => {
  const board = createFilledMatrix(4, 4, 0);
  const firstPosition = generateRandomPosition();
  let secondPosition;
  do {
    secondPosition = generateRandomPosition();
  } while (
    firstPosition[0] === secondPosition[0] &&
    firstPosition[1] === secondPosition[1]
  );

  board[firstPosition[0]][firstPosition[1]] = 2;
  board[secondPosition[0]][secondPosition[1]] = 2;

  return board;
};

const generateRandomPosition = () => {
  return [generateRandomInteger(0, 3), generateRandomInteger(0, 3)];
};

export const moveBlock = ({
  currentBoard,
  direction,
}: MoveBlockParams): BoardTiles => {
  let newMatrix: BoardTiles = [];

  if (direction === "LEFT") {
    newMatrix = currentBoard.map((row) => sumRow(row));
  }
  if (direction === "RIGHT")
    newMatrix = currentBoard.map((row) => sumRow(row.reverse()).reverse());

  if (direction === "DOWN") {
    newMatrix = transposeMatrix(currentBoard).map((row) =>
      sumRow(row.reverse()).reverse()
    );
    newMatrix = transposeMatrix(newMatrix);
  }

  if (direction === "UP") {
    newMatrix = transposeMatrix(currentBoard).map((row) => sumRow(row));
    newMatrix = transposeMatrix(newMatrix);
  }

  return newMatrix;
};
