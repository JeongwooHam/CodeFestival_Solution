let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")

const len = input.shift();

  const result = [];
  const arr = input.map((mem) => mem.split(" ").map((val) => Number(val)));

  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        if (arr[j][0] > arr[i][0] && arr[j][1] > arr[i][1]) rank++;
      }
    }
    result.push(rank);
  }

console.log(result.join(" "));