/*
- map 객체를 생성했을 때 각 문자의 개수가 모두 짝수이거나 하나만 홀수라면 가능하다.
*/

function solution(str) {
  const wordMap = new Map();
  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    if (wordMap.has(key)) {
      const previous = wordMap.get(key);
      wordMap.set(key, previous + 1);
    } else {
      wordMap.set(key, 1);
    }
  }
  const cnt = [...wordMap.values()].filter((n) => n % 2);

  return cnt.length <= 1;
}
