function solution(n) {
  return n
    .toString()
    .split("")
    .every((w) => !(w % 2));
}
