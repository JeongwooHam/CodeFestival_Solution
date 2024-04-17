/*
- 반복문을 사용하여 max 값을 최대값으로 대체한다.
*/

function solution(arr) {
  const len = arr.length;
  let max = arr[0] * arr[1];
  for (let i = 1; i < len - 1; i++) {
    max = Math.max(max, arr[i] * arr[i + 1]);
  }
  return max;
}
