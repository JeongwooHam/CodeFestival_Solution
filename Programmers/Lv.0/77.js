/*
[l로 만들기]

알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.
*/

console.log("BA".charCodeAt(0) > "AB".charCodeAt(0));
function solution(myString) {
  let result = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString.charCodeAt(i) < "l".charCodeAt(0)) {
      result += "l";
    } else {
      result += myString[i];
    }
  }
  return result;
}

// 정규표현식 + replace 사용하기
const solution = (myString) => myString.replace(/[a-k]/g, "l");

// charCodeAt 사용하지 않고 문자 자체로도 비교할 수 있음!!!!!!
// map 사용하기
function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}
