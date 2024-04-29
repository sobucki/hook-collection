import { renderHook } from "@testing-library/react";
import { useSnakeGameProps } from "../types";
import useSnakeGame from "../use-snake-game";

describe("use-snake-game hook tests", () => {
  const createHook = (props: useSnakeGameProps) => {
    return renderHook(() => useSnakeGame(props));
  };

  describe("initialization", () => {
    it("should create a table with correct size 40x40", () => {
      const { result } = createHook({ height: 40, width: 40 });

      expect(result.current.table).length(40);
      expect(result.current.table[0]).length(40);

      expect(result.current.table).matchSnapshot();
    });

    it("should create a table with correct size 80x40", () => {
      const { result } = createHook({ height: 80, width: 40 });

      expect(result.current.table).length(80);
      expect(result.current.table[0]).length(40);

      expect(result.current.table).matchSnapshot();
    });
  });
});
