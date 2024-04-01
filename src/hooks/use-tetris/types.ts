export type TetrisProps = {
  height: number;
  width: number;
};

export type PieceNames = "I" | "O" | "T" | "S" | "Z" | "J" | "L";

export type PieceInfo = {
  shape: PieceNames;
  piece: TetrisPiece;
  position: {
    x: number;
    y: number;
  };
};

export type TetrisPiece = number[][];

export type GameStatus = "STOPPED" | "RUNNING";
