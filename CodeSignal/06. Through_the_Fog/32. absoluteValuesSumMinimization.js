/*
- 배열의 길이가 홀수일 경우 중간 지점에 위치한 수가 기준
- 배열의 길이가 짝수인 경우 length - 1을 반으로 나눈 값이 기준
*/

function solution(a) {
  return a[Math.floor((a.length - 1) / 2)];
}
