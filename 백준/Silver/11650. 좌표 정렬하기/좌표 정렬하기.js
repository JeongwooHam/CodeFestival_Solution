const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
				.split('\n').slice(1).map(el => el.split(' ').map(Number))

const solution = (arr) =>
  arr.sort(([ax, ay], [bx, by]) => {
    if (ax === bx) return ay - by;
    return ax - bx;
  }).map(coor => coor.join(' ')).join('\n')   ;

console.log(solution(input))