const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const len = input.shift();

const result = input
    .map((member) => member.split(" "))
    .sort(([ageA], [ageB]) => ageA - ageB)
    .map((member) => member.join(" "));

console.log(result.join("\n"));