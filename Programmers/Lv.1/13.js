/*
[두 정수 사이의 합]
두 정수 a, b가 주어졌을 때 
a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  const arr = [];
  if (a > b) {
    for (let i = a; i >= b; i--) {
      arr.push(i);
    }
  } else {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
  }
  return arr.reduce((sum, num) => sum + num);
}

console.log(solution(5, 3));

// (양 끝의 합) * (개수)/2
// 문제를 풀기 전 적용할 수 있는 수학 공식이 있는지 고민/찾아보기!
function adder(a, b) {
  let result = 0;
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
