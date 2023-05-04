let heightArr = prompt().split(" ");

for (let i = 0; i < heightArr.length; i++) {
  heightArr[i] = parseInt(heightArr[i]);
}

let sortedArr = [...heightArr];
sortedArr.sort((a, b) => a - b);

let sortedResult = [];
for (let i = 0; i < heightArr.length; i++) {
  sortedResult[i] = heightArr[i] === sortedArr[i];
}

console.log(heightArr);
console.log(sortedArr);

console.log(sortedResult);

if (sortedResult.every((el) => el === true)) {
  console.log("YES");
} else {
  console.log("NO");
}

// answer: 숫자로 변환하지 않고 문자열로 split > sort > join
// 키가 15, 149, 1378 일 가능성은 없으므로 문자열로 푸는 것이 더 간단했을 것 같음
