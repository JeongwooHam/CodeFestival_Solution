const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
const [min, max] = input.map(Number);
  const result = [];
  const isPrime = Array.from({ length: max + 1 }, () => true);

  isPrime[0] = isPrime[1] = false; // 소수가 아님

  for (let i = 2; i <= max; i++) {
    if (isPrime[i]) {
      // 소수면
      for (let j = i * 2; j <= max; j += i) {
        isPrime[j] = false; // 소수의 배수는 소수가 아님
      }
    }
  }

  for (let i = min; i <= max; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }

 console.log(result.join("\n"))