import { initializeBoard } from "../game";

describe("game tests", () => {
  describe("create tables", () => {
    it("should create table with 4x4", () => {
      const board = initializeBoard();

      expect(board).length(4);
      board.forEach((row) => expect(row).length(4));
    });

    it("should have two distinct values", () => {
      const board = initializeBoard();

      let countTwos = 0;
      board.forEach((row) => {
        row.forEach((cell) => {
          if (cell > 0) {
            countTwos++;
          } else {
            expect(cell).toBe(0);
          }
        });
      });

      expect(countTwos).toBe(2);
    });
  });
});
