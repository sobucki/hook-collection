import { useState } from "react";
import { PieceNames, TetrisProps } from "./types";
import { createFilledMatrix } from "../../util/utils";
import { createPiece } from "./pieces";

function useTetris({ height, width }: TetrisProps) {
  const initialTable = createFilledMatrix(height, width, 0);
  const [table, setTable] = useState<number[][]>(initialTable);

  const initialPiece: PieceNames = "L";
  const [currentPiece, setCurrentPiece] = useState(() => {
    return { shape: createPiece(initialPiece), x: 0, y: 0 };
  });

  return {
    table,
    currentPiece: {
      name: initialPiece,
      piece: currentPiece,
    },
  };
}

export default useTetris;
