/*
[가장 짧은 문자거리]
한 개의 문자열 s와 문자 t가 주어지면 
문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
*/

// for문을 양방향으로 두 번 돌리면 해결할 수 있음
// 큰 수를 잡아서 w일때는 0으로 초기화하고 아닐 때는 ++해서 answer 배열에 push
// teachermode - e
// 1001 0 1 2 3 0 1 2 3 4 0 > 왼쪽에 위치한 e와 떨어진 거리
// 1 0 3 2 1 0 4 3 2 1 0> 오른쪽에 위치한 e와 떨어진 거리
// 작은 값일 경우 replace
const solution = (str, w) => {
  const answer = [];
  let p = 1000;
  // 왼쪽에 위치한 w와 떨어진 거리
  for (let x of str) {
    if (x == w) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  // 오른쪽에 위치한 w와 떨어진 거리
  p = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      // 구해진 값과 원래 구한 값 비교
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
};

console.log(solution("teachermode", "e"));

// @ notes
// for 문 잘못 구현해서 틀림
// const solution = (str, w) => {
//   const idx = [];
//   const answer = [];
//   for (i in str) {
//     if (str[i] === w) idx.push(i);
//   }
//   for (let i = 0; i < str.length; i++) {
//     const distance = [];
//     for (let j = 0; j < idx.length; j++) {
//       distance.push(Math.abs(j - i));
//     }
//     console.log(distance);
//     answer.push(Math.min(...distance));
//   }
//   console.log("idx", idx);

//   return answer;
// };
