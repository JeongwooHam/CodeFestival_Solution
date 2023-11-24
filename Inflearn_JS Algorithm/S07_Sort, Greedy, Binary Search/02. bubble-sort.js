/*
[버블 정렬]
N개의 숫자가 주어지면 오름차순으로 '버블 정렬'하여 출력하는 프로그램을 작성하라.
*/

/*
🥸 예상 풀이법
1. 배열에 대해 for문(i)을 돌린다.
2. 내부에 두 번째 for문(j)을 돌린다.
    - arr[j]가 arr[j+1]보다 크면 두 개의 자리를 바꾼다. > 제일 뒷자리부터 결정됨
3. i가 끝날 때까지 반복한다.
*/

const solution = (arr) => {
  let answer = arr;

  for (let i = 0; i < answer.length - 1; i++) {
    // 한 턴마다 뒷자리가 정해지므로 길이를 줄여나가야 함
    for (let j = 0; j < answer.length - i - 1; j++) {
      if (answer[j] > answer[j + 1])
        // 선택 정렬에 비해 교환을 많이 함
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
  }

  return answer;
};
console.log(solution([13, 5, 11, 7, 23, 15]));
