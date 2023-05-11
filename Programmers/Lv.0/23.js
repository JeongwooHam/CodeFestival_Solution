/*
[최댓값 만들기 (1)]
정수 배열 numbers가 매개변수로 주어집니다.
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

const numbers = [0, 31, 24, 10, 1, 9];

const resultArr = [];

/*
numbers[0] * 1 2 3 4

numbers[1] * 2 3 4

numbers[2] * 3 4

numbers[3] * 4
*/

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    resultArr.push(numbers[i] * numbers[j]);
  }
}

console.log(Math.max(...resultArr));

// 더 간단한 해결법
// sort 사용하여 정렬한 후 제일 큰 두 수끼리 곱해주기!
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
