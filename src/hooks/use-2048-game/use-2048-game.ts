import { initializeBoard } from "./game";

function use2048Game() {
  const board = initializeBoard();

  const score = 0;
  return { board, score };
}

export default use2048Game;
