import { Direction } from "../common/use-keyboard-directions/types";

export type BoardTiles = number[][];

export type MoveBlockParams = {
  currentBoard: BoardTiles;
  direction: Direction;
};
