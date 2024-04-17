function solution(a) {
  let result = 0;
  for (let i = 1; i < a.length; i++) {
    // 앞의 값과 같으면
    if (a[i] === a[i - 1]) {
      a[i] += 1;
      result++;
    }
    // 앞의 값보다 작으면
    if (a[i] < a[i - 1]) {
      const dif = a[i - 1] - a[i] + 1;
      a[i] += dif;
      result += dif;
    }
  }
  return result;
}
