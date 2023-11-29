// 백준은 함수로 굳이 만들지 않아도 된다!
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const croatia = {
  "c=": 1,
  "c-": 1,
  "dz=": 1,
  "d-": 1,
  lj: 1,
  nj: 1,
  "s=": 1,
  "z=": 1,
};
let answer = input;
for (let key in croatia) {
  // 입력된 문자가 key를 가지고 있으면 해당 부분을 크로아티아 알파벳으로 바꿔버리기!!
  if (answer.includes(key)) {
    answer = answer.replaceAll(key, croatia[key]);
  }
}
console.log(answer.length); // 길이를 출력해주면 끝
