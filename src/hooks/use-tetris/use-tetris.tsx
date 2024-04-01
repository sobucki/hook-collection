import { useCallback, useEffect, useState } from "react";
import { GameStatus, PieceInfo, PieceNames, Table, TetrisProps } from "./types";
import { createFilledMatrix } from "../../util/utils";
import { canMove, createPiece } from "./pieces";

function useTetris({ height, width }: TetrisProps) {
  const initialTable = createFilledMatrix(height, width, 0);
  const [table, setTable] = useState<Table>(initialTable);

  const initialPiece: PieceNames = "L";
  const [currentPiece, setCurrentPiece] = useState<PieceInfo>();

  const [gameStatus, setGameStatus] = useState<GameStatus>("STOPPED");

  const integratePiece = useCallback(
    (pieceInfo: PieceInfo) => {
      const newTable = [...table];
      pieceInfo.piece.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell) {
            newTable[pieceInfo.position.y + i][pieceInfo.position.x + j] = cell;
          }
        });
      });
      setTable(newTable);
    },
    [table]
  );

  useEffect(() => {
    const movePieceDown = () => {
      setCurrentPiece((prev) => {
        if (!prev) return undefined;
        const newPosition = { ...prev.position, y: prev.position.y + 1 };
        if (canMove({ piece: prev.piece, newPosition, table })) {
          return { ...prev, position: newPosition };
        } else {
          integratePiece(prev);
          return undefined;
        }
      });
    };

    const intervalId = setInterval(() => {
      if (gameStatus === "RUNNING") {
        movePieceDown();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [gameStatus, integratePiece, table]);

  const startGame = () => {
    const piece = createPiece(initialPiece);
    setCurrentPiece({ piece, shape: initialPiece, position: { x: 0, y: 0 } });
    setGameStatus("RUNNING");
  };

  return {
    table,
    currentPiece,
    gameStatus,
    startGame,
  };
}

export default useTetris;
