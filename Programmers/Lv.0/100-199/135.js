/*
[문자열 돌리기]
문자열 str이 주어집니다.
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line.split("")];
}).on("close", function () {
  str = input[0];
  const last = str.pop(0, str.length - 1);
  const result = [];
  str.forEach((el) => result.push(el, "\n"));
  result.push(last);
  const answer = result.join("");
  console.log(answer);
});

// [...str].forEach(c => console.log(c)) > 이렇게 간단한 방법이 있었는데..!
