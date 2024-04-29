import { renderHook } from "@testing-library/react";
import useKeyboardDirections from "../use-keyboard-directions";
import { act } from "react-dom/test-utils";

describe("useKeyboardDirections", () => {
  it('should initialize with "IDLE"', () => {
    const { result } = renderHook(() => useKeyboardDirections());
    expect(result.current).toBe("IDLE");
  });

  it("updates direction on arrow key press", () => {
    const { result } = renderHook(() => useKeyboardDirections());

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    });
    expect(result.current).toBe("UP");

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
    });
    expect(result.current).toBe("RIGHT");

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    });
    expect(result.current).toBe("DOWN");

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));
    });
    expect(result.current).toBe("LEFT");
  });

  it("does not change direction on non-arrow key press", () => {
    const { result } = renderHook(() => useKeyboardDirections());

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    });
    expect(result.current).toBe("IDLE");
  });
});
