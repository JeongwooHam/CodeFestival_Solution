function solution(matrix) {
  const col = matrix.length;
  const row = matrix[0].length;
  const mine = Array.from({ length: col }, () => Array.from({ length: row }));

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      let cnt = 0;
      // mine in the horizontal direction
      if (j > 0 && matrix[i][j - 1]) cnt++;
      if (j < row - 1 && matrix[i][j + 1]) cnt++;

      // mine in the vertical direction
      if (i > 0 && matrix[i - 1][j]) cnt++;
      if (i < col - 1 && matrix[i + 1][j]) cnt++;

      // mine in the diagnol direction
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) cnt++;
      if (i > 0 && j < row - 1 && matrix[i - 1][j + 1]) cnt++;
      if (i < col - 1 && j > 0 && matrix[i + 1][j - 1]) cnt++;
      if (i < col - 1 && j < row - 1 && matrix[i + 1][j + 1]) cnt++;
      mine[i][j] = cnt;
    }
  }
  return mine;
}

// use 'reduce'
/**
 * The simplest way to accomplish this task is to manually check each direction for every element in the matrix.
 * We can create a `directions` array to shorten the code for doing so, having it represent the x and y deltas.
 *
 * Aside from that, it's rather self-explanatory.
 */

// possible directions in which neighboring cells can be located
const directions = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

solution = (matrix) =>
  matrix.map((row, y) =>
    row.map((col, x) =>
      directions.reduce(
        (count, i) =>
          // calculate the count of neighboring truthy values
          // checks if the neighboring cell exists and contains a truthy value
          // if so, it increments the 'count' variable
          (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])),
        0
      )
    )
  );
