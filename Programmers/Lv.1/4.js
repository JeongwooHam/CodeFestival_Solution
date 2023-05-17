/*
[약수의 합]
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (!(n % i)) {
      arr.push(i);
    }
  }
  return arr.reduce((sum, num) => sum + num);
}

// 배열 없이 더 sum에 바로 i를 더하면 더 빠르게 풀 수 있음
