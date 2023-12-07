let n = require("fs").readFileSync("/dev/stdin");
let answer = 0;

for (let i = 1; i <= n; i++) {
  const arr = (i + "").split("");
  if (arr.length <= 2) answer++;
  else {
    let flag = true;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] !== arr[1] - arr[0]) flag = false;
    }
    if (flag) answer++;
  }
}

console.log(answer);
