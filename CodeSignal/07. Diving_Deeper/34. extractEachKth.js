function solution(inputArray, k) {
  return inputArray.filter((_, i) => (i + 1) % k);
}
