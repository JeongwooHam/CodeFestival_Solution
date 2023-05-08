/*
[문자열 앞의 n 글자]
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

const my_string = "ProgrammerS123".split("");
const num = 11;

const result = my_string.splice(0, num).join("");
console.log(result);

// my_string에 바로 slice 주는 것이 더 빠름
