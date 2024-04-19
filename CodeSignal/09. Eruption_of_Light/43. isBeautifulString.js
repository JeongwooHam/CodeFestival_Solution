function solution(inputString) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  const wordMap = new Map();
  for (let w of alphabet) {
    wordMap.set(w, 0);
  }
  for (let s of inputString) {
    wordMap.set(s, wordMap.get(s) + 1);
  }
  const cntArr = [...wordMap.values()];
  return cntArr.every((cnt, i, arr) => {
    if (i === arr.length - 1) return true;
    return cnt >= arr[i + 1];
  });
}
