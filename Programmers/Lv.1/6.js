/*
[x만큼 간격이 있는 n개의 숫자]
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
*/
function solution(x, n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(x + x * i);
  }
  return arr;
}

// 배열을 미리 만들어두는 방법!
// n의 길이를 갖는 빈 Array 생성 > 해당 값을 모두 x로 채우고 > map을 사용하여 각 값을 변형
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
