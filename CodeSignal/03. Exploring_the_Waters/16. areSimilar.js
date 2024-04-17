/*
- i로 인덱싱 했을 때 다른 값이 있을 때마다 배열에 담는다.
- 값이 2개이고 순서만 다르지 동일한 수라면 true
- 값이 1개 또는 3개 이상이면 false
*/

function solution(a, b) {
  const new_a = [];
  const new_b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      new_a.push(a[i]);
      new_b.push(b[i]);
    }
  }
  if (!new_a.length) return true;
  if (new_b.reverse().join("") === new_a.join("")) return true;
  return false;
}
