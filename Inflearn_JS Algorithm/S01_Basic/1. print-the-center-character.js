/*
[가운데 문자 출력]
소문자로 된 단어가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램 작성하기
단, 단어의 길이가 짝수일 경우 가운데 2개의 문자 출력하기

예1: study ➡️ u
예2: good ➡️ oo
*/

// substring 사용하기
// substring(3, 4) ➡️ 3만 출력 (3부터 4 전까지)
const solution = (s) => {
  // 단어의 길이를 2로 나눈 것
  // 홀수일 경우 정확히 가운데 인덱스
  // 짝수일 경우
  let mid = Math.floor(s.length / 2);

  // substring(3, 4) ➡️ 3만 출력 (3부터 4 전까지)
  if (s.length % 2) return s.substring(mid, mid + 1);
  return s.substring(mid - 1, mid + 1);
};

// substr 사용하기
// substring(3, 4) ➡️ 3, 4, 5, 6 출력 (3부터 4개)
const solution2 = (s) => {
  // 단어의 길이를 2로 나눈 것
  // 홀수일 경우 정확히 가운데 인덱스
  // 짝수일 경우
  let mid = Math.floor(s.length / 2);

  // substring(3, 4) ➡️ 3만 출력 (3부터 4 전까지)
  if (s.length % 2) return s.substr(mid, 1);
  return s.substr(mid - 1, 2);
};

console.log(solution("study")); // mid = 2
console.log(solution("good")); // mid = 2
