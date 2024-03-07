const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = input[0];

const Operator = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "(": 3,
  ")": 3,
};

const makePostfix = (str) => {
  const stack = [];
  let print = "";

  for (let i = 0; i < str.length; i++) {
    // 연산자라면
    if (Operator[str[i]]) {
      // 닫는 괄호라면 여는 괄호가 나올 때까지 pop해서 출력한다.
      if (str[i] === ")") {
        for (let s = stack.length - 1; s >= 0; s--) {
          if (stack[stack.length - 1] === "(") {
            stack.pop();
            break;
          }
          print += stack.pop();
        }
      }
      // stack이 비어있다면 바로 담아준다.
      // stack에 여는 괄호가 들어가 있다면 바로 담아준다.
      else if (
        !stack.length ||
        stack[stack.length - 1] === "(" ||
        Operator[stack[stack.length - 1]] < Operator[str[i]]
      ) {
        stack.push(str[i]);
      }
      // 모든 경우에 속하지 않는다면 연산자의 우선순위에 맞춰 담아준다.
      else {
        // 자신보다 우선순위가 낮은 연산자가 top이 될 때까지 pop해서 print에 담는다.
        while (Operator[stack[stack.length - 1]] >= Operator[str[i]]) {
          if (stack[stack.length - 1] === "(") break;
          print += stack.pop();
        }
        // 자신을 stack에 담는다.
        stack.push(str[i]);
      }
    }
    // 피연산자라면
    else {
      print += str[i];
    }
  }

  // stack에 남은 값이 있을 경우
  while (stack.length) print += stack.pop();

  // 괄호를 삭제하고 반환한다.
  return print.replaceAll("(", "").replaceAll(")", "");
};

console.log(makePostfix(string))