function solution(n) {
  n = n + "";
  let cnt = 0;
  while (n.length > 1) {
    cnt++;
    let replace = 0;
    for (let i = 0; i < n.length; i++) {
      replace += Number(n[i]);
    }
    n = replace + "";
  }
  return cnt;
}
