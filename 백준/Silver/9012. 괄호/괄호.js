const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
				.split('\n').slice(1)

let answer = [];

  for (let el of input) {
    let bStack = 0;
    for (let i = 0; i < el.length; i++) {
      if (bStack < 0) break;
      if (el[i] === "(") bStack++;
      else bStack--;
    }
    if (bStack !== 0) answer.push("NO");
    else answer.push("YES");
  }

  console.log(answer.join("\n"));