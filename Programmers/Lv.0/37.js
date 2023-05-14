/*
[특정 문자 제거하기]
문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

const my_string = "abcdef";
const letter = "f";

function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((el) => el !== letter)
    .join("");
}

// 더 단순한 방법
// const answer = my_string.split(letter).join('')

console.log(solution(my_string, letter));
