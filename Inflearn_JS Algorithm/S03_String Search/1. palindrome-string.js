/*
[회문 문자열]
앞에서 일을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
문자열이 입력되었을 때 해당 문자열이 회문 문자열이면 'YES',
회문 문자열이 아니면 'NO'를 출력하는 프로그램을 작성하라.
단 회문을 검사할 때 대소문자를 구분하지 않는다.
*/

// 1. 직접 비교
// boolean 값을 리턴하면 되므로 대/소문자 중 하나로 통일하기
// str.length / 2까지만 돌면 됨
const solution = (str) => {
  const s = str.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // 1을 빼주기!!
    if (s[i] !== s[len - i - 1]) return "NO";
  }
  return "YES";
};

// 2. reverse 사용하기
const solution_reverse = (str) => {
  const s = str.toLowerCase();
  const reversed = s.split("").reverse().join("");
  return s === reversed ? "YES" : "NO";
};

console.log(solution("gOog"));
