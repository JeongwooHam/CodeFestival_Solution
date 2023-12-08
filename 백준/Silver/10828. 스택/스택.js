const fs = require("fs");
const arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const stack = [];
const answer = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "pop") {
    if (stack.length === 0) answer.push(-1);
    else {
      const target = stack.pop();
      answer.push(target);
    }
  } else if (arr[i] === "size") answer.push(stack.length);
  else if (arr[i] === "empty") answer.push(stack.length ? 0 : 1);
  else if (arr[i] === "top") {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack[stack.length - 1]);
  } else {
    const target = arr[i].split(" ")[1];
    stack.push(Number(target));
  }
}

console.log(answer.join("\n"));
