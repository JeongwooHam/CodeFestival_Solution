/*
테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 
모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

[input] 
50
5
20
20
20
20
20
[output] 2
*/

const limitation = parseInt(prompt(), 10);
const n = parseInt(prompt(), 10);
let weightArr = [];
let sum = 0;
let count = 0;

// for (let i = 0; i < n; i++) {
//   weightArr.push(parseInt("20", 10));
// }

// // 배열의 값을 하나씩 더하되 sum > limitation이면 break
// for (let num of weightArr) {
//   if (sum >= limitation) {
//     sum -= num;
//     break;
//   }
//   sum = sum + num;
// }
// console.log(count);

for (let i = 0; i <= n; i++) {
  sum += parseInt(prompt(), 10);
  if (sum <= limitation) {
    count = i + 1;
  }
}

console.log(count);

// answer (못풀었음)
let total = 0;
let count2 = 0;
const limit = prompt("제한 무게를 입력하세요.");
const n2 = prompt("인원수를 입력하세요.");

for (let i = 1; i <= n2; i++) {
  total += parseInt(prompt("무게를 입력해주세요."), 10);
  if (total <= limit) {
    count2 = i; // 애초에 받을때부터 제한 무게가 넘어가면 받지 않기
  }
}

console.log(count2);
