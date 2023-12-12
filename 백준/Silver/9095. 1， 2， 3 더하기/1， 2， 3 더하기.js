const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = input.slice(1);
const way = [1, 2, 4];
for (let i = 3; i < Math.max(...arr); i++) {
  way.push(way[i - 1] + way[i - 2] + way[i - 3]);
}

console.log(arr.map((val) => way[val - 1]).join("\n"))