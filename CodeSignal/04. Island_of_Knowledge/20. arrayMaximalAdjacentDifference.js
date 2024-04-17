function solution(inputArray) {
  let max = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const dif = Math.abs(inputArray[i] - inputArray[i + 1]);
    max = Math.max(max, dif);
  }
  return max;
}
