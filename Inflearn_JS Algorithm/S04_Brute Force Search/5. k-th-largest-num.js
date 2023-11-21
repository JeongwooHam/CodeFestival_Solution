/*
[K번째 큰 수]
현수는 1부터 100 사이의 자연수가 적힌 N장의 카드를 가지고 있다.
같은 숫자의 카드가 여러 장 있을 수 있다.
현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 한다.
3장을 뽑을 수 있는 모든 경우의 수를 기록한다고 했을 때,
기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하라.
*/

/*
🥸 예상 풀이법
1. 정렬한다.
2. 모든 수에 대해 3개의 합이 담긴 배열을 만든다.
3. 해당 배열의 k번째 수를 찾는다.
4. 모두 같은 값이라 k번째 수가 없다면 -1을 반환한다.
*/

const solution = (k, arr) => {
  const sum = new Set(); // 아예 set로 시작하기
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  const answer = [...sum].sort((a, b) => b - a);
  console.log(answer);
  return answer[k - 1] ? answer[k - 1] : -1; // ~번째: 1빼주기
};

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
