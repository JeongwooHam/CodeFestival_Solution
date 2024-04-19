function solution(votes, k) {
  // 자신과 다른 참가자들과의 표 차
  const max = Math.max(...votes);
  const isMax = votes.filter((c) => c === max).length;
  const possible = votes.filter(
    (c) => c + k > max || (isMax === 1 && c === max)
  );
  return possible.length;
}
