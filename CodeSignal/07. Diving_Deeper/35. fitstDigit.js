function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") continue;
    if (Number.isInteger(Number(inputString[i]))) return inputString[i];
  }
}
