/*
[음양 더하기]
어떤 정수들이 있습니다. 
이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
*/

const absolutes = [4, 7, 12];
const signs = [true, false, true];
function solution(absolutes, signs) {
  for (idx in absolutes) {
    absolutes[idx] = signs[idx] ? +absolutes[idx] : -absolutes[idx];
  }
  return absolutes.reduce((sum, num) => sum + num);
}

signs[1] = true;
console.log(signs);

// 더 간단한 방법
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
