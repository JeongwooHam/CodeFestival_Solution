const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = input.slice(0, input.length - 1).map((el) => Number(el));
  // 에라토스테네스의 체 알고리즘을 통해 소수 찾기 (찾을 범위의 최댓값)
  const largest = Math.max(...arr);
  // 인덱스의 소수 여부를 나타내는 용도의 배열. 소수인 경우 false
  const forPCheck = Array.from({ length: largest + 1 }, () => false);
  for (let i = 2; i <= largest; i++) {
    // 소수(false)인 경우 실행
    if (!forPCheck[i]) {
      // 초기값은 i의 제곱, i의 배수들에 대해 소수가 아니라고 표시한다.
      for (let j = i * i; j <= largest; j += i) {
        forPCheck[j] = true;
      }
    }
  }

  const result = arr.map((num) => {
    for (let i = 3; i < num; i += 2) {
      if (!forPCheck[i] && !forPCheck[num - i])
        return `${num} = ${i} + ${num - i}`;
    }
    return "Goldbach's conjecture is wrong.";
  });

console.log(result.join("\n"))