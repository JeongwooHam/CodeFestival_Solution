/*
0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다. 
예를 들어 0부터 20까지 1의 개수를 세어본다면 
1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 
11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/

// 0~1000까지의 수를 문자열로 만들어 배열에 담기
const arr = Array.from({ length: 1001 }, (_, i) => i + "");
// console.log(arr);

// 숫자들을 split
// 각 배열을 검사하여 1이 있을 때마다 count 증가시키기
let newArr = arr.map((el) => el.split(""));

let count = 0;
newArr.forEach((numArr) => {
  for (num of numArr) {
    if (num === "1") {
      count++;
    }
  }
});
console.log(count);

// 정규표현식을 사용한 답안
// 굳이 고차함수 사용할 필요 없이 빈 문자열에 인덱스 붙여주기
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
console.log(s);
console.log(s.match(/1/g).length);

// for of를 사용한 답안
//4번답안 - for of 사용
let s2 = "";
for (let i = 0; i <= 1000; i++) {
  s2 += i;
}
let count2 = 0;
for (let j of s2) {
  if (j == 1) {
    count2++;
  }
}
console.log(count2);
