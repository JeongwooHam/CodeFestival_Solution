/*
[정수 내림차순으로 배치하기]
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

function solution(n) {
  return (
    (n + "")
      .split("")
      .sort((a, b) => b - a)
      .join("") / 1 // << join("") 의 경우 string 반환하므로 정수값 얻기 위해 변환 과정 필요
  );
}

console.log(typeof [1, 2, 3, 4, 5].join(""));
