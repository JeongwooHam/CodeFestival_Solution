/*
[숫자 찾기]
정수 num과 k가 매개변수로 주어질 때, 
num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 
없으면 -1을 return 하도록 solution 함수를 완성해보세요.
*/

const solution = (num, k) => {
  const result = num
    .toString()
    .split("")
    .map(Number)
    .findIndex((n) => n === k);
  //   return result >= 0 ? result + 1 : result;

  // result가 -1일 경우 +1 해주면 0, 즉 falsy 값이 되므로 || 연산자 우항의 -1 반환
  return result + 1 || -1;
};

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
