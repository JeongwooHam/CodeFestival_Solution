function solution(inputArray) {
  return inputArray
    .sort((a, b) => b.length - a.length)
    .filter((str) => str.length === inputArray[0].length);
}
