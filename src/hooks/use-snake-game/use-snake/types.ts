import { Position } from "../../common/types";

export type useSnakeProps = {
  initialPosition: Position;
};

export type snakeState = "STOPPED" | "ALIVE" | "DEAD";

export type SnakeBody = { body: Position[] };
