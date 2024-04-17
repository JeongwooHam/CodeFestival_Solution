/*
- 이중 for문을 돌리되 (너비 > 깊이)
- 깊이 탐색 중 하나라도 0이 발견되면 탐색 중단
*/

function solution(matrix) {
  const row = matrix[0].length;
  const col = matrix.length;
  let sum = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!matrix[j][i]) break;
      sum += matrix[j][i];
    }
  }
  return sum;
}
