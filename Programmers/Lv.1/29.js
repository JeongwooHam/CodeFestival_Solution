/*
[직사각형 별찍기]
*/

const n = 5;
const m = 3;

for (let i = 0; i < m; i++) {
  const arr = [];
  for (let j = 0; j < n; j++) {
    arr.push("*");
  }
  console.log(arr.join(""));
}

// 값을 찍기만 하면 되므로 아래의 방법도 가능
console.log(("*".repeat(a) + `\n`).repeat(b));
