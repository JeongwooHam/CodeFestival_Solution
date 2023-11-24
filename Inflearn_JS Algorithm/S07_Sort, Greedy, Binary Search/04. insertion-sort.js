/*
[삽입 정렬]
N개의 숫자가 주어지면 오름차순으로 '삽입 정렬'하여 출력하는 프로그램을 작성하라.
*/

/*
🥸 예상 풀이법
어떻게,, 구현하나

🚩 해답
1. 0번 값은 그대로 두고 1번부터 시작하는 for문(i)을 돌린다.
2. tmp라는 변수를 생성해 arr[i] 값을 저장한다. 
3. i-1부터 0까지의 범위를 가지는 for문(j)을 돌린다.
4. arr[j] > tmp면 배열에 해당 값을 삽입한다. > arr[j+1] = arr[j]
5. j의 마지막 부분에 tmp를 삽입한다.
*/
const solution = (arr) => {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j; // scope 때문에 미리 선언해주어야 함
    for (j = i - 1; j >= 0; j--) {
      // 클 경우 밀면서 복사
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break; // 정렬이 됐으면 멈추기
    }
    arr[j + 1] = tmp;
  }

  return answer;
};
console.log(solution([11, 7, 5, 6, 10, 9]));
