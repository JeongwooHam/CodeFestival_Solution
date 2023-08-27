const getRank = (scores) => {
  let n = scores.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
};

// @ notes
// 점수 배열 - 등수 배열
// 이중 for문으로 구하기 (큰 수가 있으면 ++)
// 같은 점수가 있어도 위의 방법으로 구하면 됨
