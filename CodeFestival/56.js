// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const keyArr = Object.keys(nationWidth);
const valArr = Object.values(nationWidth);
console.log(valArr);

let gapArr = [];

for (let i = 1; i < valArr.length; i++) {
  gapArr.push(valArr[i] - valArr[0]);
}

console.log(gapArr);

const resultVal = valArr[gapArr.indexOf(Math.min(...gapArr)) + 1];
console.log(resultVal);

const resultNation = keyArr.find((key) => nationWidth[key] === resultVal);

console.log(resultNation, resultVal);

// answer
/*
const w = nationWidth['korea'];

// 아예 비교 객체에서는 korea 값 삭제 >> 지우는게 인덱스 번호 구하기 더 쉬웠을듯!
delete nationWidth['korea'];

// Object.entries > [키, 값] 쌍을 담은 배열을 반환함
const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

//gap에 최댓값 저장
// func.apply(thisArg, [argsArray])
// thisArg: 옵션. func를 호출하는데 제공될 this의 값
// [argsArray]: 옵션. func이 호출되어야 하는 인수를 지정하는 유사배열객체
let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry){
    // 만약 최댓값이 국가.value - 한국.value의 절댓값보다 크다면
  if (gap > Math.abs(entry[i][1] - w)){
    절댓값이 최댓값이 되고 (차이만 알면 되므로 양음 구분 필요 없음)
    gap = Math.abs(entry[i][1] - w);
    그 국가의 배열이 item이 됨
    item = entry[i];
  }
}

// 국가 이름, 차이 출력
console.log(item[0], item[1] - w);
*/
