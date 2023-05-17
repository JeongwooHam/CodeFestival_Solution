/*
[자연수 뒤집어 배열로 만들기]
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

function solution(n) {
  return (n + "")
    .split("")
    .map((el) => parseInt(el))
    .reverse();
}

console.log(solution(12345));

// 더 빠르게 풀 수 있는 방법
function solution(n) {
  var arr = [];

  do {
    // n을 10으로 나눈 나머지 배열에 담기
    arr.push(n % 10);
    // 담고 난 뒤 10으로 나눠서 뒷자리 수부터 없애주기
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
