/*
[올바른 괄호]
괄호가 입력될 때 올바른 괄호이면 'YES', 올바르지 않으면 'NO'를 출력한다.
(())() : 올바른 괄호의 쌍
(()())) : 올바르지 않은 괄호의 쌍
*/

/*
🥸 예상 풀이법
- 스택을 사용하여 뒤에서부터 쌍이 형성되는지 검사한다.
- open 변수와 close 변수를 만들어서 뒤에서부터 cnt 추가
- 둘이 같은 수면 YES
*/

const mine = (bracket) => {
  let open,
    close = 0;
  const arr = bracket.split("");

  for (let i = bracket.length - 1; i >= 0; i--) {
    if (arr[i] === "(") open++;
    else close++;
  }

  return open === close ? "YES" : "NO";
};

console.log(mine("(()(()))(()"));

// 여는 괄호면 push, 닫는 괄호면 pop!!
const solution = (bracket) => {
  let answer = "YES";
  const stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (!stack.length) return "NO"; // 닫는 괄호가 더 많은 경우
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO"; // 여는 괄호가 더 많은 경우

  return answer;
};
