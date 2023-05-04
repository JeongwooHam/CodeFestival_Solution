/*
총 문자열의 길이는 50으로 제한하고 
사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 
나머지 빈 부분에는 '='을 채워 넣어주세요.

input
hi

output
========================hi========================
*/

// 1. 배열에 50개의 == 채우기
// 2. (배열의 길이 - 입력된 문자열의 길이 (48)) / 2 + 1 번째부터 입력된 문자열의 길이만큼 입력된 문자열로 splice
// 3. splice 된 배열을 join

const inputStr = "javascript";

let arr = [];
for (let i = 0; i < 50; i++) {
  arr.push("=");
}

console.log(arr.length);

arr.splice((arr.length - inputStr.length) / 2, inputStr.length, inputStr);

console.log(arr);

const result = arr.join("");
console.log(result);

// answer

const str = "javascript";

const n = 25 + parseInt(str.length / 2, 10);

//왼쪽부터 채우기
const a = str.padStart(n, "=");

//오른쪽까지 채워서 출력
console.log(a.padEnd(50, "="));

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
