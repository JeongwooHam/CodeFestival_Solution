/*
[괄호 문자 제거]
입력된 문자열에서 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하라.
*/

/*
🥸 예상 풀이법
- (의 경우 다음에 오는 문자열을 삭제한다.
- )의 경우 이전에 오는 문자열을 삭제한다. 

➡️ 여는 괄호 + 다음에 오는 문자열을 push한다. > 닫는 괄호 + 이전에 오는 문자열을 pop한다.
*/

const solution = (str) => {
  const stack = [];

  for (let x of str) {
    if (x === ")") {
      // 2. 닫는 괄호를 만나면 여는 괄호가 나올 때까지 사이의 모든 값을 pop한다.
      // pop된 것이 여는 괄호일 때까지 pop하다가 멈추기
      while (stack.pop() !== "("); // 이렇게 조건식만 써줘도 된다!!
    } else stack.push(x); // 1. 하나씩 push한다.
  }

  return stack.join("");
};

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
