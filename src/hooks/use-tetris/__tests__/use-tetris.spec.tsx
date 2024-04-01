import { renderHook } from "@testing-library/react";
import useTetris from "..";
import { TetrisProps } from "../types";

describe("useTetris tests", () => {
  const createHook = (props: TetrisProps) => {
    return renderHook(() => useTetris(props));
  };
  it("should initialize table", () => {
    const { result } = createHook({ height: 3, width: 2 });

    expect(result.current.table).toEqual([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  });

  it("should initialize with L piece", () => {
    const { result } = createHook({ height: 20, width: 10 });

    expect(result.current.currentPiece.name).toEqual("L");
    expect(result.current.currentPiece.piece).toEqual({
      shape: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      x: 0,
      y: 0,
    });
  });
});
