/*
[Special Sort]
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.
또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
*/

/*
🥸 예상 풀이법
1. 음의 정수 배열과 양의 정수 배열을 만든다.
2. 0과 비교하여 양쪽에 push한다.
3. 두 배열을 합쳐 return한다.

🚩 정렬을 사용해 풀어보기
버블 정렬을 사용하여 양수/음수가 만나면 자리를 바꿔준다. (for문으로 6까지 돈다.)
*/

const solution = (arr) => {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (answer[j] > 0 && answer[j + 1] < 0) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }

  return answer;
};
console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
