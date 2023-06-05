/*
[문자열 붙여서 출력하기]
두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.
*/

// 프로그래머스 문제 풀 때 원래 있는 코드를 해석해서 풀기..!
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str1 = input[0];
  str2 = input[1];
  console.log(str1.concat(str2));
});
