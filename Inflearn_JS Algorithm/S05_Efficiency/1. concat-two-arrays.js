/*
[두 배열 합치기]
오름차순으로 정렬이 된 두 배열이 주어지면 
두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.
*/

/*
🥸 예상 풀이법
- arr1.push(arr2) > sort
- 이러면 알고리즘이 아니지 않나..?
=========================================================
- sort 함수의 경우 nlogn의 시간 복잡도를 갖는다고 한다.
- 투 포인터 알고리즘은 n+m
- 각 배열마다 포인터 하나씩 위치시키고 포인터의 값 비교
- 둘 중 작은 수를 answer 배열에 push하고 그 부분을 가리키던 포인터만 한 칸 이동
- 한쪽 배열이 먼저 끝나면 남은 부분은 그냥 넣기
*/

const solution = (arr1, arr2) => {
  const answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);

  // 비교하기 (조건식 &&이어야 함에 주의하기!)
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2])
      answer.push(arr1[p1++]); // 후치 연산자. push 한 뒤 p1 값 변경
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
};
