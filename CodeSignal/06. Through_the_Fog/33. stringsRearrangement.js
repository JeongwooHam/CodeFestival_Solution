function solution(inputArray) {
  const len = inputArray.length;
  const checkDif = (w1, w2) => {
    let cnt = 0;
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) {
        cnt++;
      }
    }
    return cnt;
  };
  const isPossible = (arr) => {
    for (let j = 0; j < len - 1; j++) {
      if (checkDif(arr[j], arr[j + 1]) !== 1) return false;
    }
    return true;
  };
  if (isPossible(inputArray)) return true;
  for (let k = 0; k < len; k++) {
    const first = inputArray.shift();
    inputArray.push(first);
    if (isPossible(inputArray)) return true;
  }
  if (isPossible(inputArray.sort())) return true;
  return false;
}
