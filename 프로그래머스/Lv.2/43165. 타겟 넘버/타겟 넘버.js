function solution(numbers, target) {
  let answer = 0;
  const dfs = (sum, start = 0) => {
    if (start === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(sum + numbers[start], start + 1);
    dfs(sum - numbers[start], start + 1);
  };

  dfs(numbers[0], 1);
  dfs(-1 * numbers[0], 1);

  return answer;
}