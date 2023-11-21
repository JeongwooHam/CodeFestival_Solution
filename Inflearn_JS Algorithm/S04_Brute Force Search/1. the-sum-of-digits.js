/*
[자릿수의 합]
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
*/

/*
🥸 예상 풀이법

- 최대값을 나타내는 변수 max와 답을 나타내는 변수 answer를 생성한다.
- 두 번째 인자인 배열을 forEach로 순회하며 각 요소의 자릿수의 합을 구하고,
  해당 값을 max와 비교해 클 경우 answer의 값을 변경한다.
- 만약 max와 자릿수의 합이 같을 경우 answer와 해당 값을 직접 비교해 답을 구한다.
- answer을 return한다.
*/

const solution_n = (n, arr) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0,
      tmp = x;
    // 직접 x를 사용할 경우 원본 값이 변하게 되므로 tmp라는 임의의 변수를 새로 만들어주어야 함
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum === max) {
      answer = Math.max(answer, x);
      // if (x>answer) answer = x 조건식으로도 풀이 가능
    }
    if (sum > max) {
      max = sum;
      answer = x;
    }
  }

  return answer;
};

// 문자로 형변환하여 덧셈
const solution_str = (n, arr) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0); // 다시 숫자로 형변환 필수!
    if (sum === max) {
      answer = Math.max(answer, x);
      // if (x>answer) answer = x 조건식으로도 풀이 가능
    }
    if (sum > max) {
      max = sum;
      answer = x;
    }
  }

  return answer;
};

console.log(solution_n(7, [128, 460, 603, 40, 521, 137, 123]));
