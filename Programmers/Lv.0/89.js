/*
[자릿수 더하기]
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
*/

function solution(n) {
  const resultArr = (n + "").split("");
  return resultArr.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(solution(930211));
