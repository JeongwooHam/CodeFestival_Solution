function solution(n) {
  n = n + "";
  const half = n.length / 2;
  const getSum = (str) =>
    str.split("").reduce((sum, str) => sum + Number(str), 0);
  return getSum(n.slice(0, half)) === getSum(n.slice(half));
}
