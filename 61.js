/*
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

INPUT
aaabbbbcdddd

OUTPUT
a3b4c1d4
*/

// 연속되는 문자 찾는 함수 만들기
// set의 각 원소와 같은 것들을 한 배열에 담기 > 길이 구하기

let strArr = prompt().split("");
const resultArr = [];

const newSet = new Set(strArr);

newSet.forEach((el) => {
  const count = strArr.filter((word) => word === el).length;
  resultArr.push(el, count);
});

console.log(resultArr.join(""));

// answer
const user_s = new String(prompt("문자열을 입력하세요"));
let result_s = "";
let store_s = user_s[0];
let count = 0;

for (let i of user_s) {
  if (i === store_s) {
    // 같다면 count를 하나씩 더해주고
    count += 1;
  } else {
    // 다르다면 결과 문자열에 기준이 된 문자와 그 개수 넣어주고
    result_s += store_s + String(count);
    // 기준과 달랐던 문자를 다시 기준으로 만들어주고
    store_s = i;
    // 개수 초기화
    count = 1;
  }
}

// 마지막 문자, 개수도 담아주기
result_s += store_s + String(count);
console.log(result_s);
