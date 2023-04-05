/*
호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 
호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 
그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

[input] 97 86 75 66 55 97 85 97 97 95
[output] 6
*/

// 1.
let scores = prompt()
  .split(" ")
  .sort((a, b) => b - a);
let scoresSet = new Set(scores);
let newScores = [...scoresSet]; // 중복 제거한 배열을 만듦
console.log(scores);
console.log(newScores);
let result = {};
let sum = 0;

for (let index in scores) {
  let score = scores[index];
  result[score] = result[score] === undefined ? 1 : (result[score] += 1);
}
console.log(result);

for (val in result) {
  for (let i = 0; i < 3; i++) {
    // 중복 제거한 배열의 1-3번째 점수와 일치하는 경우에만 value값 더해줌 (3위가 몇 명인지와 관계 없이 결과 도출 가능)
    if (newScores[i] === val) {
      sum += result[val];
    }
  }
}

console.log(sum);

// answer
const scores2 = prompt()
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });

scores2.sort((a, b) => {
  return a - b;
});
console.log(scores2);

let count = 0;
let arr = [];

while (arr.length < 4) {
  // 세 번째 점수가 들어가면 중단 (3위가 두 명 이상일때는 올바른 결과값이 나오지 않음 >> 3위가 중복되지 않는 경우에만 성립하는 코드)
  let n = scores2.pop(); // 맨 뒤의 값 삭제 후 삭제된 값 반환
  console.log(n);
  console.log(arr);
  if (!arr.includes(n)) {
    // arr에 삭제된 값이 들어있지 않다면
    arr.push(n); // 뒤에 넣기
  }
  count += 1; // push되었는지 여부와 관계 없이 pop될 때마다 count는 증가
}

console.log(count);
