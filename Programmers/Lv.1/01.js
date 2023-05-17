/*
[짝수와 홀수]
정수 num이 짝수일 경우 "Even"을 반환하고
홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
*/

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 더 간결하게 쓸 수 있는 방법!
// 0 > falsy 값
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
