// A prefix is a non-empty string constructed from the first few characters of the string.

function solution(inputString) {
  let prefix = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") break;
    if (Number.isNaN(Number(inputString[i]))) break;
    prefix += inputString[i];
  }
  return prefix;
}
