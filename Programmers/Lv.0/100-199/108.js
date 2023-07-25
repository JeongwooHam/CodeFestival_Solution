/*
[특별한 이차원 배열 1]
정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(n) {
  const result = Array(n)
    .fill()
    .map((_) => Array(n).fill(0));
  return result.map((arr, i) => {
    arr.splice(i, 1, 1);
    return arr;
  });
}

console.log(solution(3));
