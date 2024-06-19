import { renderHook } from "@testing-library/react";
import { useSnakeProps } from "../types";
import useSnake from "../use-snake";
import { act } from "react-dom/test-utils";

describe("use-snake tests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  const createHook = (props: useSnakeProps) => {
    return renderHook(() => useSnake(props));
  };

  const initialPosition = {
    x: 0,
    y: 0,
  };

  it("should begin in idle state", () => {
    const { result, unmount } = createHook({
      initialPosition,
    });

    expect(result.current.snake.body[0]).toEqual({
      x: 0,
      y: 0,
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.snake.body[0]).toEqual({
      x: 0,
      y: 0,
    });

    unmount();
  });

  it("should start move when press any sides", () => {
    const { result, unmount } = createHook({
      initialPosition,
    });

    expect(result.current.snake.body[0]).toEqual({
      x: 0,
      y: 0,
    });
    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    });

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(result.current.snake.body[0]).toEqual({
      x: -5,
      y: 0,
    });

    unmount();
  });

  it("should start with size 1", () => {
    const { result, unmount } = createHook({ initialPosition });

    expect(result.current.size).toEqual(1);
    unmount();
  });
});
