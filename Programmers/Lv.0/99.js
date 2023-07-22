/*
[배열 회전시키기]
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers, direction) {
  const result = [];
  console.log(numbers.at(-1));
  if (direction === "right") {
    for (let i = -1; i < numbers.length - 1; i++) {
      result.push(numbers.at(i));
    }
  } else {
    for (let i = 0; i > numbers.length * -1; i--) {
      result.unshift(numbers.at(i));
    }
  }
  return result;
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
console.log();
