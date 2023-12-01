const line = require("fs").readFileSync("/dev/stdin", "utf8");

let [firstLine, ...input] = line
  .trim()
  .split("\n")
  .map(v => Number(v)); 

const arr = input.sort((a, b) => a - b);

console.log(arr.join('\n'))
