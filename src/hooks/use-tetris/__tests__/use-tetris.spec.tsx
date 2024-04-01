import { renderHook } from "@testing-library/react";
import useTetris from "..";
import { TetrisProps } from "../types";
import { act } from "react-dom/test-utils";
import DefaultEmptyTable_20_10 from "./mocks/default-empty-table-20_10.json";
import FirstCaseTable_20_10 from "./mocks/default-table-first-case-20_10.json";

describe("useTetris tests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  const createHook = (props: TetrisProps) => {
    return renderHook(() => useTetris(props));
  };

  const defaultProps: TetrisProps = { height: 20, width: 10 };
  it("should initialize table", () => {
    const { result, unmount } = createHook({ height: 3, width: 2 });

    expect(result.current.table).toEqual([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);

    expect(result.current.gameStatus).toEqual("STOPPED");
    expect(result.current.currentPiece).toBeUndefined();
    unmount();
  });

  it("should initialize game when call startGame function", () => {
    const { result, unmount } = createHook(defaultProps);

    act(() => {
      result.current.startGame();
    });

    expect(result.current.table).toEqual(DefaultEmptyTable_20_10);
    expect(result.current.currentPiece).not.toBeNull();
    expect(result.current.currentPiece?.shape).toEqual("L");
    expect(result.current.currentPiece).toEqual({
      piece: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      position: {
        x: 0,
        y: 0,
      },
      shape: "L",
    });
    unmount();
  });

  it("should piece down when goes 1 second", () => {
    const { result, unmount } = createHook(defaultProps);

    act(() => {
      result.current.startGame();
    });

    expect(result.current.currentPiece).not.toBeNull();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.currentPiece?.shape).toEqual("L");
    expect(result.current.currentPiece).toEqual({
      piece: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      position: {
        x: 0,
        y: 1,
      },
      shape: "L",
    });
    unmount();
  });

  it("should piece down until hit the floor", () => {
    const { result, unmount } = createHook(defaultProps);

    act(() => {
      result.current.startGame();
    });

    expect(result.current.currentPiece).not.toBeNull();

    act(() => {
      vi.advanceTimersByTime(18000);
    });

    expect(result.current.table).toEqual(DefaultEmptyTable_20_10);

    expect(result.current.currentPiece?.shape).toEqual("L");
    expect(result.current.currentPiece).toEqual({
      piece: [
        [0, 0, 1],
        [1, 1, 1],
      ],
      position: {
        x: 0,
        y: 18,
      },
      shape: "L",
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.currentPiece).toEqual(undefined);
    expect(result.current.table).toEqual(FirstCaseTable_20_10);

    unmount();
  });
});
