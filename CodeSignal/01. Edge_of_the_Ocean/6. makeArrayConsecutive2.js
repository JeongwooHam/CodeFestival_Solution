/*
- 정수 배열을 정렬한다.
- 최소값부터 최대값까지의 수 중 비어있는 숫자들을 찾는다.
- 해당 수들의 개수를 반환한다.
*/

function solution(statues) {
  statues.sort((a, b) => a - b);
  const len = statues.length;
  const min = statues[0];
  const max = statues[len - 1];

  const perfectArr = Array.from({ length: max - min + 1 }).map(
    (_, i) => min + i
  );
  return perfectArr.filter((num) => !statues.includes(num)).length;
}
