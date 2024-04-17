function solution(inputArray) {
  const len = inputArray.length;
  inputArray.sort((a, b) => a - b);
  const last = inputArray[len - 1];
  const path = Array.from({ length: last + 1 }, (_, i) => {
    if (inputArray.includes(i)) return true;
    return false;
  });
  let jump = 1;

  const isBlocked = (num) => {
    for (let i = num; i <= last; i += num) {
      if (path[i]) return true;
    }
    return false;
  };

  while (isBlocked(jump)) jump++;

  return jump;
}
