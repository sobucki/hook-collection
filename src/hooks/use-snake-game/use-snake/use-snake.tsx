import { useCallback, useEffect, useState } from "react";
import { SnakeBody, snakeState, useSnakeProps } from "./types";
import useKeyboardDirections from "../../common/use-keyboard-directions";

function useSnake({ initialPosition }: useSnakeProps) {
  const MAX_SPEED = 100;
  const [snake, setSnake] = useState<SnakeBody>({ body: [initialPosition] });
  const direction = useKeyboardDirections();
  const [speed, setSpeed] = useState(800);
  const [status, setStatus] = useState<snakeState>("ALIVE");

  const increaseSpeed = () => {
    setSpeed((current) => (current > MAX_SPEED ? current - 10 : current));
  };

  useEffect(() => {
    setStatus("ALIVE");
  }, [direction]);

  const moveSnake = useCallback(() => {
    if (status !== "ALIVE") return;

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

      const newBody = [newHead, ...prevSnake.body.slice(0, -1)];
      return { body: newBody };
    });
  }, [direction, status]);

  useEffect(() => {
    let interval: number;
    if (status === "ALIVE") {
      interval = setInterval(moveSnake, speed);
    }
    return () => clearInterval(interval);
  }, [moveSnake, speed, status]);

  const growSnake = useCallback(() => {
    increaseSpeed();
    setSnake((prevSnake) => ({
      body: [
        ...prevSnake.body,
        { ...prevSnake.body[prevSnake.body.length - 1] },
      ],
    }));
  }, []);

  return { snake, size: snake.body.length, growSnake };
}

export default useSnake;
