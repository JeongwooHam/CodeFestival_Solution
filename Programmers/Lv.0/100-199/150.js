/*
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.

위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/

const solution = (arr, q) => {
  let result = [...arr];
  for ([s, e] of q) {
    result = result.map((el, i) => {
      if (i >= s && i <= e) return el + 1;
      return el;
    });
  }
  return result;
};

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
); // [1, 3, 4, 4, 4]
