// ⚠️ 제대로 풀이하지 못한 문항
function solution(s) {
  let error = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] <= s[i - 1]) {
      error++;
      if (s[i] <= s[i - 2] && s[i + 1] <= s[i - 1]) return false;
    }
  }
  // directly return the result of conditional expression
  return error <= 1;
}
