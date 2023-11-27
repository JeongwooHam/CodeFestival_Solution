const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.trim()); 

const arr = input[1];
const numArr = arr.split(" ").map((el) => +el);
const filtered = [...new Set(numArr)].sort((a, b) => a - b);

console.log(filtered.join(" "))