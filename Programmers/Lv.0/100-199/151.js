/*
두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 
이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 
solution 함수를 작성해 주세요.

a + d * (1-1)
a + d * (2-1)
a + d * (3-1)

이제 reduce가 손에 익은 것 같아 뿌듯,,^_^
*/

const solution = (a, d, arr) =>
  arr.reduce((sum, el, i) => (el ? sum + a + d * i : sum), 0);

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));
