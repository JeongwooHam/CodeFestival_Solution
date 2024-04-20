function solution(n) {
  n = n + "";
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    const newN = Number(n.slice(0, i) + n.slice(i + 1));
    max = Math.max(max, newN);
  }
  return max;
}
