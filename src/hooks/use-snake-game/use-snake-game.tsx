import { useState } from "react";
import { createFilledMatrix } from "../../util/utils";
import { useSnakeGameProps } from "./types";
import { Table } from "../common/types";
import useSnake from "./use-snake/use-snake";

function useSnakeGame({ height, width }: useSnakeGameProps) {
  const initialTable = createFilledMatrix(height, width, 0);
  const [table, setTable] = useState<Table>(initialTable);
  const initialHeadPosition = {
    x: Math.floor(height / 2),
    y: Math.floor(width / 2),
  };
  const { snake, growSnake, size } = useSnake({
    initialPosition: initialHeadPosition,
  });

  return {
    table: table.map((row, xIndex) =>
      row.map((cell, yIndex) => {
        const found = snake.body.find(
          (item) => item.x === xIndex && item.y === yIndex
        );
        if (found) return 1;

        return cell;
      })
    ),
    snake,
    growSnake,
    size,
  };
}

export default useSnakeGame;
