const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const arr = [...new Set(input.slice(1))].sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    else return a.length > b.length ? 1 : -1;
  });
  for (let x of arr) {
    console.log(x);
  }