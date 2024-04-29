import { useCallback, useEffect, useState } from "react";
import { SnakeBody, useSnakeProps } from "./types";
import useKeyboardDirections from "../../common/use-keyboard-directions";

function useSnake({ initialPosition }: useSnakeProps) {
  const [snake, setSnake] = useState<SnakeBody>({ body: [initialPosition] });
  const direction = useKeyboardDirections();

  const moveSnake = useCallback(() => {
    setSnake((prevSnake) => {
      const newHead = { ...prevSnake.body[0] };
      switch (direction) {
        case "UP":
          newHead.x -= 1;
          break;
        case "DOWN":
          newHead.x += 1;
          break;
        case "LEFT":
          newHead.y -= 1;
          break;
        case "RIGHT":
          newHead.y += 1;
          break;
        default:
          break;
      }

      // Novo corpo da cobra: adiciona a nova cabeça e remove o último elemento
      const newBody = [newHead, ...prevSnake.body.slice(0, -1)];
      return { body: newBody };
    });
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [moveSnake]);

  return { snake };
}

export default useSnake;
