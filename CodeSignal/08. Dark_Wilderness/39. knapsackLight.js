function solution(value1, weight1, value2, weight2, maxW) {
  // 둘 다 maxW보다 무거울 때
  if (weight1 > maxW && weight2 > maxW) return 0;
  // 둘 다 들 수 있을 때
  if (weight1 + weight2 <= maxW) return value1 + value2;
  // 둘 중 하나만 될 때
  const pos = [];
  const value = [value1, value2];
  if (weight1 <= maxW) pos.push(0);
  if (weight2 <= maxW) pos.push(1);
  let max = 0;
  for (let i = 0; i < pos.length; i++) {
    max = Math.max(max, value[pos[i]]);
  }
  return max;
}

// Let's compress the code snippet above.
// It seems that it's important to use conditional expressions properly.

const solution = (v1, w1, v2, w2, max) =>
  Math.max(w1 <= max && v1, w2 <= max && v2, w1 + w2 <= max && v1 + v2);
