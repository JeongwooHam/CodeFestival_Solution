/*
1 - 1
+ 4
2 - 5
+ 8
3 - 13
+ 12
4 - 25
*/

function solution(n) {
  let add = 0;
  for (let i = 1; i < n; i++) {
    add += i * 4;
  }
  return 1 + add;
}
