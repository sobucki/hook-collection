export const removeSpaces = (array: number[]) => {
  const newArray = array.filter((val) => val > 0);
  const zeroCount = array.length - newArray.length;
  return [...newArray, ...Array(zeroCount).fill(0)];
};

export const sumRow = (row: number[]) => {
  const newRow = removeSpaces(row);
  for (let i = 0; i < newRow.length - 1; i++) {
    if (newRow[i] === newRow[i + 1] && newRow[i] !== 0) {
      newRow[i] *= 2;
      newRow[i + 1] = 0;
    }
  }
  return removeSpaces(newRow);
};

export const transposeMatrix = (matrix: number[][]) => {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
};
