/*
[최대 매출]
현수의 아빠는 제과점을 운영한다.
현수 아빠는 현수에게 N일 동안의 매출 기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했다.
만약 N=10이고 10일 간의 매출 기록이 아래와 같다고 하자.
12 15 11 20 25 10 20 19 13 15
k=3일 때 연속된 3일 간의 최대 매출액은 56만원이다.
*/

/*
🥸 예상 풀이법
1. 슬라이딩 윈도우용 변수를 하나 선언한다.
2. 인덱싱을 통해 시작점을 옮겨가며 + K - 1 만큼의 매출액을 구한다.
3. answer 변수와 비교해 더 큰 경우로 대체한다.
*/

const mine = (k, arr) => {
  const window = (i) => [...arr].slice(i, i + k);
  const getSum = (arr) => arr.reduce((sum, num) => sum + num);
  const n = arr.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, getSum(window(i)));
  }

  return answer;
};

// 전체를 새로 더하지 말고 원래 있던 값에서 새로운 값 더하고 제일 앞에 값 빼주기
// sum + arr[i] - arr[i-k]
const solution = (k, arr) => {
  let answer,
    sum = 0;

  // 첫 번째 3일 분량을 미리 구해둬야 함
  for (let i = 0; i < k; i++) sum += arr[i];
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
};

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
