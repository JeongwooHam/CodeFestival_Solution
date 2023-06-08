/*
[숨어있는 숫자의 덧셈(1)]
문자열 my_string이 매개변수로 주어집니다. 
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

// console.log(isNaN("a" / 1));

function solution(my_string) {
  const filteredArr = [...my_string].filter((el) => !isNaN(el / 1));
  let sum = 0;
  filteredArr.forEach((el) => (sum += parseInt(el)));
  return sum;
}

console.log(solution("aAb1B2cC34oOp"));
