const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const arr = input.slice(1).map((el) =>
    el
      .split(" ")
      .slice(1)
      .map((v) => Number(v))
  );

  const result = [];
  const getGCP = (a, b) => {
    if (b === 0) return a;
    return getGCP(b, a % b);
  };

  for (let tc of arr) {
    const gcpArr = [];
    for (let i = 0; i < tc.length - 1; i++) {
      for (let j = i + 1; j < tc.length; j++) {
        const max = Math.max(tc[i], tc[j]);
        const min = Math.min(tc[i], tc[j]);
        gcpArr.push(getGCP(max, min));
      }
    }
    const sum = gcpArr.reduce((sum, num) => sum + num);
    result.push(sum);
  }

  console.log(result.join("\n").trim());