/*
[선택 정렬]
N개의 숫자가 주어지면 오름차순으로 '선택 정렬'하여 출력하는 프로그램을 작성하라.
*/

/*
🥸 예상 풀이법
1. Math.min으로 배열의 최솟값을 찾는다.
2. 해당 값을 pop한 뒤 unshift하여 배열의 맨 앞으로 옮긴다.
3. slice(1)을 사용하여 이후 배열에 대해 똑같은 작업을 수행한다.
4. slice된 배열의 길이가 1이 되면 멈춘다.

🚩 해답
1. 배열의 0부터 for문(i)을 돌린다.
2. 배열의 1부터 for문(j)을 돌리며 arr[j]와 arr[idx]를 비교한다.
   - arr[j]가 더 작을 경우 idx = j
   - 아니라면 계속 비교 진행
3. 한 턴이 끝나면 arr[i]와 arr[idx] 값을 바꾼다.
4. i가 끝날 때까지 반복

*/

const solution = (arr) => {
  let answer = arr; // 원본 배열 얕은 복사

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i; // i로 초기화
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j; // 더 작은 값의 위치로 변경
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 구조분해할당으로 swap 가능!!
  }
  return answer;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
