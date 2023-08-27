const grid = (arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  // 행의 합, 열의 합
  let sum1 = (sum2 = 0); // scope 전체에서 유효하도록 for문 밖에 선언해줌
  for (let i = 0; i < n; i++) {
    // 매번 초기화해줘야 함
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      // 행 탐색 (행은 고정하고 열만 바뀜)
      sum1 += arr[i][j];
      // 열 탐색 (열은 고정하고 행만 바뀜)
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  // 두 대각선의 합
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; // 0X0, 1X1, ...
    sum1 += arr[i][n - i - 1]; // 0X4, 1X3 ...
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
};

// @ notes
// arr[행⬇️][열➡️]
// Number.MIN_SAFE_INTEGER: JS에서 안전한 최소 정수값
