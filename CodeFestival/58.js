/*
원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/

let num = prompt("숫자를 입력하세요.");

num = [...num].reverse().join("");
console.log(num);

/*
length: 12
slice: 0,3 / 3,6 / 6,9 / 9,12
*/

let resultArr = [];
for (let i = 0; i < num.length; i += 3) {
  console.log(i, i + 3);
  resultArr.push(num.slice(i, i + 3));
}

console.log(resultArr);
let result = resultArr.join(",");
console.log(result);
result = [...result].reverse().join("");
console.log(result);

/*
[ANSWER]
1. 내장함수 사용
Number.prototype.toLocaleSting(): 지정된 지역에서 사용하는 숫자의 표현방식으로 문자열로 리턴한다.
const n = prompt("숫자를 입력해주세요.");
parseInt(n, 10);

console.log(n.toLocaleString());

//2. 재귀함수 사용
function comma(s) {
  if (s.length <= 3) {
    // 길이가 3보다 작으면 바로 반환
    return s;
  } else {
    // ,이전에 오는 것이 길이가 3 이하가 될 때까지 반복하는 재귀함수
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
}

const n = prompt("숫자를 입력해주세요.");
console.log(comma(n));
*/
