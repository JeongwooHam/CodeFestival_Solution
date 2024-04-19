function solution(s) {
  const wordMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    const previousValue = wordMap.get(key);
    if (wordMap.has(key)) {
      wordMap.set(key, previousValue + 1);
    } else {
      wordMap.set(key, 1);
    }
  }
  return wordMap.size;
}
