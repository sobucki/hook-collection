import { createFilledMatrix, generateRandomInteger } from "../../util/utils";

export const initializeBoard = () => {
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
  console.log(board);

  return board;
};

const generateRandomPosition = () => {
  return [generateRandomInteger(0, 3), generateRandomInteger(0, 3)];
};
