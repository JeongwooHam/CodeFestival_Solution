/*
[문자열로 변환]
정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.
*/
function solution(n) {
  return n.toString();
}

// 아래가 계속 number로 찍히던 것은 소괄호로 한 번 감싸주지 않았기 때문이었음
console.log(typeof (123 + ""));
