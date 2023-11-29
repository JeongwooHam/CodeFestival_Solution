const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const croatia = {
  "c=": "č",
  "c-": "ć",
  "dz=": "dž",
  "d-": "đ",
  lj: "lj",
  nj: "nj",
  "s=": "š",
  "z=": "ž",
};

const countCroatia = (str) => {
  let result = str.length;
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    let w = "";
    if (cnt > 0) {
      cnt--;
    } else {
      for (let k = 0; k < 3; k++) {
        w = w + str[i + k];
        if (croatia[w]) {
          cnt = k;
          result -= w.length - 1;
          w = "";
        }
      }
    }
  }

  return result;
};

console.log(countCroatia(input[0]));