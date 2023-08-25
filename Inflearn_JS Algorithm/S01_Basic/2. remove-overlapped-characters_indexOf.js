/*
중복 문자 제거

소문자로 된 한 개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램 작성하기
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지하게 하기

예: ksekkset ➡️ kset
*/

// indexOf 사용하기
// indexOf("k") : 0번 인덱스부터 시작해서 K 찾기
// indexOf("k", 3) : 3번 인덱스부터 시작해서 K 찾기
const solution = (s) => {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  //   s.filter((word, i) => s.indexOf(word) === i)
  return answer;
};

// indexOf로 문자열에서 특정 값의 개수 구하기

const anotherIndexOf = (s) => {
  let answer = 0;
  let pos = s.indexOf("k");
  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }
  return answer;
};
