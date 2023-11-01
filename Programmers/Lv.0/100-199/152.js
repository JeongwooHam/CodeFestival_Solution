/*
[세로 읽기]
문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.\

m글자씩 나누어 담은 배열의 c번째 글자들을 join

0 3
4 7
8 11
*/

const solution = (str, m, c) => {
  const stand = Math.ceil(str.length / m);
  let result = "";

  for (let i = 0; i < stand; i++) {
    result += str.slice(i * m, i * m + m)[c - 1];
  }

  return result;
};

// 고차함수로 풀이하는 방법
function solution(my_string, m, c) {
  // 나머지로 접근할 수 있었다!
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
