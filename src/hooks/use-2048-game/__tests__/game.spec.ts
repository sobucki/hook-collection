import { initializeBoard, moveBlock } from "../game";

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

  describe("move tiles", () => {
    describe("to left", () => {
      it("should move all values to left", () => {
        let table = [
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        let result = moveBlock({ currentBoard: table, direction: "LEFT" });
        expect(result).toEqual([
          [2, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);

        table = [
          [0, 0, 2, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        result = moveBlock({ currentBoard: table, direction: "LEFT" });
        expect(result).toEqual([
          [4, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);
      });
    });
    describe("to right", () => {
      it("should move all values to left", () => {
        let table = [
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        let result = moveBlock({ currentBoard: table, direction: "RIGHT" });
        expect(result).toEqual([
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);

        table = [
          [0, 0, 2, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        result = moveBlock({ currentBoard: table, direction: "RIGHT" });
        expect(result).toEqual([
          [0, 0, 0, 4],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);

        table = [
          [4, 4, 2, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        result = moveBlock({ currentBoard: table, direction: "RIGHT" });
        expect(result).toEqual([
          [0, 0, 8, 4],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);

        table = [
          [4, 4, 4, 4],
          [4, 4, 4, 4],
          [4, 4, 4, 4],
          [4, 4, 4, 4],
        ];
        result = moveBlock({ currentBoard: table, direction: "RIGHT" });
        expect(result).toEqual([
          [0, 0, 8, 8],
          [0, 0, 8, 8],
          [0, 0, 8, 8],
          [0, 0, 8, 8],
        ]);

        table = [
          [2, 2, 4, 4],
          [8, 8, 16, 16],
          [32, 32, 64, 64],
          [128, 128, 256, 256],
        ];
        result = moveBlock({ currentBoard: table, direction: "RIGHT" });
        expect(result).toEqual([
          [0, 0, 4, 8],
          [0, 0, 16, 32],
          [0, 0, 64, 128],
          [0, 0, 256, 512],
        ]);
      });
    });

    describe("to up", () => {
      it("should move all values to left", () => {
        let table = [
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        let result = moveBlock({ currentBoard: table, direction: "UP" });
        expect(result).toEqual([
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);

        table = [
          [0, 0, 2, 2],
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        result = moveBlock({ currentBoard: table, direction: "UP" });
        expect(result).toEqual([
          [0, 0, 2, 4],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);

        table = [
          [16, 0, 2, 2],
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [16, 0, 0, 0],
        ];
        result = moveBlock({ currentBoard: table, direction: "UP" });
        expect(result).toEqual([
          [32, 0, 2, 4],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);
      });
    });

    describe("to down", () => {
      it("should move all values to left", () => {
        let table = [
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        let result = moveBlock({ currentBoard: table, direction: "DOWN" });
        expect(result).toEqual([
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 2],
        ]);

        table = [
          [0, 0, 2, 2],
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        result = moveBlock({ currentBoard: table, direction: "DOWN" });
        expect(result).toEqual([
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 2, 4],
        ]);

        table = [
          [16, 0, 2, 2],
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [16, 0, 0, 0],
        ];
        result = moveBlock({ currentBoard: table, direction: "DOWN" });
        expect(result).toEqual([
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [32, 0, 2, 4],
        ]);
      });
    });

    describe("all movies", () => {
      it("should sum all numbers", () => {
        let table = [
          [2, 2, 2, 2],
          [2, 2, 2, 2],
          [2, 2, 2, 2],
          [2, 2, 2, 2],
        ];
        table = moveBlock({ currentBoard: table, direction: "RIGHT" });
        expect(table).toEqual([
          [0, 0, 4, 4],
          [0, 0, 4, 4],
          [0, 0, 4, 4],
          [0, 0, 4, 4],
        ]);

        table = moveBlock({ currentBoard: table, direction: "DOWN" });
        expect(table).toEqual([
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 8, 8],
          [0, 0, 8, 8],
        ]);

        table = moveBlock({ currentBoard: table, direction: "LEFT" });
        expect(table).toEqual([
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [16, 0, 0, 0],
          [16, 0, 0, 0],
        ]);

        table = moveBlock({ currentBoard: table, direction: "UP" });
        expect(table).toEqual([
          [32, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]);
      });
    });
  });
});
