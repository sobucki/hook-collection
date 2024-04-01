export type TetrisProps = {
  height: number;
  width: number;
};

export type PieceNames = "I" | "O" | "T" | "S" | "Z" | "J" | "L";

export type Position = {
  x: number;
  y: number;
};

export type PieceInfo = {
  shape: PieceNames;
  piece: TetrisPiece;
  position: Position;
};

export type TetrisPiece = number[][];
export type Table = number[][];

export type GameStatus = "STOPPED" | "RUNNING";
