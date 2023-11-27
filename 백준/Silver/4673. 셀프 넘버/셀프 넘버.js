const selfNumSet = new Set();
for (let i = 1; i <= 10000; i++) {
  let sum = 0;
  // 문자로 만들기
  let str = i + "";
  // 숫자 더해주기
  for (let k = 0; k < str.length; k++) {
    sum += str[k] * 1;
  }
  selfNumSet.add(i + sum);
}
for (let i = 1; i <= 10000; i++) {
  if (!selfNumSet.has(i)) console.log(i);
}
