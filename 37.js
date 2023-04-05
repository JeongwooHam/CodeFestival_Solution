/*
새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

[input] 원범 원범 혜원 혜원 혜원 혜원 유진 유진
[output] 혜원(이)가 총 4표로 반장이 되었습니다.
*/

let nameArr = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
console.log(nameArr);

let nameSet = new Set(nameArr);
console.log(nameSet);

//1. 중복이 제거된 nameSet을 다시 배열로 저장하기
let setToArr = [...nameSet];
console.log(setToArr);
let result = [];

//2. 이름이 같은 것들만 들어있는 배열 만들기 (filter)
for (let i = 0; i < setToArr.length; i++) {
  result[i] = nameArr.filter((el) => el === setToArr[i]);
}
console.log(result);

//3. [{이름: '이름', length: n}, ...]
let sortedArr = result.map((el) => ({
  name: el[0],
  length: el.length,
}));

console.log(sortedArr);

//4. array.length로 sort하기
sortedArr.sort((a, b) => b.length - a.length);
console.log(sortedArr);

console.log(
  `${sortedArr[0].name}(이)가 총 ${sortedArr[0].length}표로 반장이 되었습니다.`
);

// answer
const array = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
let result2 = {};
let winner = "";

for (let index in array) {
  console.log(index);
  let val = array[index];
  console.log(val);
  result2[val] =
    result2[val] === undefined ? 1 : (result2[val] = result2[val] + 1);
}

console.log(result2);

winner = Object.keys(result2).reduce(function (a, b) {
  console.log(a);
  console.log(b);
  return result2[a] > result2[b] ? a : b;
});

console.log(winner);

console.log(`${winner}(이)가 총 ${result2[winner]}표로 반장이 되었습니다.`);
