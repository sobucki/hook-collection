import { useCallback, useEffect, useState } from "react";
import { GameStatus, PieceInfo, PieceNames, TetrisProps } from "./types";
import { createFilledMatrix } from "../../util/utils";
import { createPiece } from "./pieces";

function useTetris({ height, width }: TetrisProps) {
  const initialTable = createFilledMatrix(height, width, 0);
  const [table, setTable] = useState<number[][]>(initialTable);

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

  const canMove = useCallback(
    (piece: number[][], newPosition: { x: number; y: number }): boolean => {
      // Verifica se a peça está dentro dos limites do tabuleiro
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
    },
    [height, table, width]
  );

  useEffect(() => {
    const movePieceDown = () => {
      setCurrentPiece((prev) => {
        if (!prev) return undefined;
        const newPosition = { ...prev.position, y: prev.position.y + 1 };
        if (canMove(prev.piece, newPosition)) {
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
  }, [canMove, gameStatus, integratePiece]);

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
