export function createFilledMatrix<T>(
  rows: number,
  columns: number,
  fillValue: T
): T[][] {
  if (rows <= 0 || columns <= 0) {
    throw new Error("Rows and columns must be positive integers.");
  }

  return Array.from({ length: rows }, () => Array(columns).fill(fillValue));
}
