/*
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

[input]
10 9 8 7 6 5 4 3 2 1
[output]
10
*/

const strArr = "10 9 8 7 6 5 4 3 2 1".split(" ");
const numArr = strArr.map((el) => parseInt(el, 10));

console.log(numArr);

const result = Math.max(...numArr);
console.log(result);

// answer
let numbers = prompt("10개의 숫자를 입력하세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

// sort 사용 후 인덱싱하였음

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers[0]);
