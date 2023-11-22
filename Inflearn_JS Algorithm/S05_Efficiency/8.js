/*
[모든 아나그램 찾기 (해쉬, 투포인터, 슬라이딩 윈도우)]
s 문자열에서 t 문자열과 아나그램이 되는 s의 부분문자열의 개수를 구하는 프로그램을 작성하라.
아나그램 판별 시 대소문자가 구분된다.
8. find-every-anagram
*/

/*
🥸 예상 풀이법
- 알고리즘을 사용하지 않는다면, slice와 sort를 사용해 풀었을 것 같다.
- 알고리즘을 사용한다면 해쉬 객체 생성 함수를 만들고, 슬라이딩 윈도우로 3개씩 끊어서 투포인터로 검사할 것 같다.
*/

// 성공
const withoutA = (s, t) => {
  t = [...t].sort().join("");
  let answer = 0;
  const makeSlice = (i) =>
    [...s]
      .slice(i, i + t.length)
      .sort()
      .join("");
  for (let i = 0; i < s.length; i++) {
    if (makeSlice(i) === t) answer++;
  }

  return answer;
};

console.log(withoutA("bacaAacba", "abc"));

// 불필요하게 길고 오답이 나온다.
// const withA = (s, t) => {
//   let answer = 0;

//   const makeMap = (str) => {
//     const m = new Map();

//     for (let word of str) {
//       if (m.has(word)) m.set(word, m.get(word) + 1);
//       else m.set(word, 1);
//     }

//     return m;
//   };

//   const targetMap = makeMap(t);
//   console.log(targetMap);

//   const isAnagram = (str) => {
//     for (let word of str) {
//       if (!targetMap.has(word) || targetMap.get(word) === 0) return false;
//       else {
//         targetMap.set(word, targetMap.get(word) - 1);
//         result = true;
//       }
//     }
//     console.log("res", str, result);
//     return true;
//   };

//   let target = "";
//   for (let i = 0; i < t.length; i++) target += s[i];
//   if (isAnagram(target)) answer++;
//   console.log("t", answer);

//   for (let i = t.length; i < s.length; i++) {
//     const makeNewWord = (start, end) => {
//       const arr = [...target];
//       arr.shift(start);
//       arr.push(end);
//       return arr.join("");
//     };

//     target = makeNewWord(s[i - t.length], s[i]);
//     if (isAnagram(target)) {
//       answer++;
//     }
//   }

//   return answer;
// };

// console.log(withA("bacaAacba", "abc"));

const compareMaps = (map1, map2) => {
  // map의 size: key의 종류 > 아나그램이려면 같아야 한다.
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    // map1의 key가 map2에도 있는지
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
};

const solution = (s, t) => {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let n = t.length;
  for (let i = 0; i < n - 1; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  // sH에 추가하여 비교하고 뒤에 추가 , 앞 삭제
  for (let rt = n - 1; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]); // key의 value 값이 0이면 삭제해서 새로 추가되게 하기
    lt++;
  }

  return answer;
};

console.log(solution("bacaAacba", "abc"));
