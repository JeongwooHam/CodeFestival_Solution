/*
[후위식 연산 (postfix)]
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하라.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12이다.
*/

/*
🥸 예상 풀이법
1. 연산자 객체를 생성한다.
obj = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}
2. obj[x] 값이 없으면 stack에 Number(x)를 push한다.
3. obj[x] 값이 있으면 stack.length-1과 stack.length-2에 대해 해당 함수를 실행하고,
   두 값을 pop하는 대신 결과값을 push한다.
   - 첫번째 pop 값이 rt, 두번쨰 pop 값이 lt
4. 위의 과정을 반복한다.
*/

const solution = (postfix) => {
  const stack = [];
  for (let x of postfix) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  return stack[0];
};

console.log(solution("352+*9-"));
