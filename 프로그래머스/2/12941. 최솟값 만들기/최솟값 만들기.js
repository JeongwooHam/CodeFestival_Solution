function solution(A, B) {
  let answer = 0;

  // sort 자체가 원본을 변경하므로 변수에 할당할 필요가 없었다!
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += sortedA[i] * sortedB[i];
  }

  return answer;
}
