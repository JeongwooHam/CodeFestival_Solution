/*
[아나그램 (해쉬)]
anagram이란 알파벳의 나열 순서는 다르지만 그 구성이 일치하는 두 문자열이다.
예) abaAece, baeeACA
즉, 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 경우를 anagram이라고 한다.

길이가 같은 두 개의 단어가 주어졌을 때, 두 단어가 anagram인지 판별하는 프로그램을 작성하라.
anagram 판별에서는 대소문자가 구분된다.
*/

// 나의 풀이
const descomposeStr = (str) => {
  const newStr = new Map();

  for (let word of str) {
    if (newStr.has(word)) newStr.set(word, newStr.get(word) + 1);
    else newStr.set(word, 1);
  }

  return newStr;
};

const solution = (w1, w2) => {
  const firstMap = descomposeStr(w1);
  const secondMap = descomposeStr(w2);

  let res = "YES";

  for (let [key, val] of firstMap) {
    if (secondMap.get(key) !== val) res = "NO";
  }

  return res;
};

console.log(solution("abaCC", "Caaab"));

// 강의 풀이
// 하나만 map으로 만든 후 비교
function solution2(str1, str2) {
  let answer = "YES";

  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    // key 자체가 존재하지 않거나 있지만 이미 값이 0인 경우
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}
