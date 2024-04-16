/*
Given the string, check if it is a palindrome.
- 뒤집은 문자열과 같으면 팰린드롬
*/

function solution(inputString) {
  return inputString === inputString.split("").reverse().join("");
}
