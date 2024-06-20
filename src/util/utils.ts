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

export function generateRandomInteger(min: number, max: number) {
  if (min > max) {
    throw new Error("Min value cannot be greater than max value");
  }

  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
}
