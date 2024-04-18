function solution(n, firstNumber) {
  const half = n / 2;
  return half > firstNumber ? half + firstNumber : firstNumber - half;
}
