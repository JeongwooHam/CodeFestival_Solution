/*
[빈 배열에 추가, 삭제하기]
https://school.programmers.co.kr/learn/courses/30/lessons/181860
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 
길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, 
flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, 
flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

- true: arr[i]를 arr[i] * 2 만큼 추가하기
- false: arr[i]를 뒤에서부터 arr[i] 만큼 제거하기
*/

const solution = (arr, flag) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        result.push(arr[i]);
      }
    } else {
      result.splice(result.length - arr[i], arr[i]);
    }
  }

  return result;
};

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));

// reduce로 풀어보기 + 더 깔끔한 풀이
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)] // for문 다시 돌릴 필요 없이 배열 생성자 + 구조 분해 할당
        : prev.slice(0, -num), // splice 대신 slice로 직전 인덱스까지 자르기!
    []
  );
}
