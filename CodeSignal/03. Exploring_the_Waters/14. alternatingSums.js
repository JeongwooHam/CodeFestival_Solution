function solution(a) {
  const f = a.filter((_, i) => i % 2 === 0).reduce((sum, num) => sum + num);

  if (a.length === 1) return [f, 0];

  const s = a.filter((_, i) => i % 2).reduce((sum, num) => sum + num);

  return [f, s];
}
