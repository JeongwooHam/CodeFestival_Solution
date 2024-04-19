function solution(inputArray, k) {
  let max = 0;
  for (let i = 0; i <= inputArray.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += inputArray[i + j];
    }
    max = Math.max(max, sum);
  }
  return max;
}
