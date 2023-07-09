/*
[3진법 뒤집기]
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/

const solution = (num) => {
  let ternary = [];
  let current = num;

  // 3진법으로 변환
  while (current > 0) {
    ternary.unshift(current % 3);
    current = Math.floor(current / 3);
  }

  // 십진법 변환
  let result = 0;
  for (let i = 0; i < ternary.length; i++) {
    result += ternary[i] * Math.pow(3, i); // Math.pow 대신 3**i 도 가능
  }
  return result;
};

console.log(solution(45));

// 간결한 풀이법
const recommendSolution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

/*
💡 위의 코드 로직 이해하기
1. n.toString(3)
    - n을 3진법으로 변환하여 문자열로 반환하였음
    - toString의 인자로 사용된 숫자는 변환하고자 하는 진법을 나타냄
2. [...n.toString(3)]
    - 3진법 문자열을 전개연산자를 통해 각 자리마다 분리하여 배열로 만듦
3. .reverse().join("")

[toString()과 parseInt()]
1. toString()
    - 주어진 숫자를 해당 진법으로 변환하여 분자열로 반환함
    - 반환된 문자열은 해당 진법을 나타내는 문자들로 구성됨
    - number.toString(radix)
    - number: 변환할 숫자
    - radix: 변환하고자 하는 진법 (optional) > default: 10
    >> 숫자를 '다른 진법으로 변환'하여 문자열로 반환
2. parseInt()
    - 주어진 문자열을 파싱하여 정수로 변환함
    - parseInt(string, radix)
    - 문자열을 해당 진법으로 해석하여 정수로 반환함
    - 문자열을 '해당 진법으로 해석'하여 정수로 반환

즉, parseInt("45", 3)이 NaN을 반환한 이유는 45가 10진법 값이었기 때문!
원하는 결과를 내고 싶었으면 toString을 사용했어야 했음
*/
