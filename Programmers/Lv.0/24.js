/*
[카운트 업]
정수 start와 end가 주어질 때, 
start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

const start = 3;
const end = 10;

function solution(start, end) {
  let answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }

  return answer;
}

console.log(solution(start, end));

// Array.from 쓰는 방법!!
function solution(start, end) {
  idx = start;
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
}
