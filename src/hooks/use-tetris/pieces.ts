import { Position, Table, TetrisPiece } from "./types";

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

export type CanMoveProps = {
  piece: TetrisPiece;
  newPosition: Position;
  table: Table;
};
export function canMove({ newPosition, piece, table }: CanMoveProps): boolean {
  // Verifica se a peça está dentro dos limites do tabuleiro
  const width = table[0].length;
  const height = table.length;
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j]) {
        const x = newPosition.x + j;
        const y = newPosition.y + i;

        // Verifica se a posição está fora dos limites do tabuleiro
        if (x < 0 || x >= width || y < 0 || y >= height) {
          return false;
        }

        // Verifica se a posição está ocupada por outra peça
        if (table[y][x]) {
          return false;
        }
      }
    }
  }

  return true;
}
