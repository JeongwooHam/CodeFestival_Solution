/*
[공통원소 구하기]
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여
오름차순으로 출력하는 프로그램을 작성하세요.
*/

/*
🥸 예상 풀이법
1. 각 배열에 포인터를 하나씩 위치시킨다.
2. 두 번째 배열의 포인터를 움직이면서 첫 번째 배열 포인터와 동일한 값이 있으면 새로운 배열에 push한다.
3. 해당 배열을 반환한다.
> 이중 for문에 더 가까운 것 같음
*/

const solution = (arr1, arr2) => {
  // 집합 정렬하기
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = p2 - 0;
  // 둘 중 하나에 대한 탐색이 끝나면 나머지도 종료
  while (p1 < arr1.length && pw < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      answer.push(arr2[p2++]);
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
};
