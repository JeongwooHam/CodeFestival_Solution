/*
@ Substrings
A string that appears within another string. 
In other words, s is considered a substring of t if all the characters of s appear in t in the same order, with no other elements in between.
*/

function solution(s) {
  let str = s[0];
  let cnt = 1;
  let result = "";
  for (let i = 1; i < s.length; i++) {
    if (s[i] === str) {
      cnt++;
    } else {
      result += (cnt > 1 ? cnt : "") + str;
      cnt = 1;
      str = s[i];
    }
  }
  result += (cnt > 1 ? cnt : "") + str;
  return result;
}
