const peak = (num) => {
  let answer = 0;
  let n = arr.length;
  dx = [-1, 0, 1, 0];
  dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 4; k++) {
        let flag = 1; // flag 변수
        // 다음에 가려고 하는 방향
        let nx = i + dx[k]; // 탐색하려는 좌표의 행
        let ny = j + dy[k]; // 탐색하려는 좌표의 열
        // 크거나 같은 값이 있을 경우 봉우리가 아님
        // 범위를 벗어나지 않도록 에러 처리
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
};

// @ notes
// 봉우리: 상하좌우가 나보다 작은 경우
// 격자의 가장자리는 0으로 초기화되어 있음
/*
사방 탐색

(i, j)
dx = [-1, 0, 1, 0] > 행
dy = [0, 1, 0, -1] > 열

이중 for문으로 탐색하면서 하나라도 자신보다 큰 값 있으면 중단
*/
