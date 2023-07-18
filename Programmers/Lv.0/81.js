/*
[홀짝에 따라 다른 값 반환하기]
양의 정수 n이 매개변수로 주어질 때, 
n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(n) {
  const numArr = Array(n)
    .fill()
    .map((el, i) => i + 1);
  // n이 홀수라면
  if (n % 2) return numArr.reduce((sum, num) => sum + (num % 2 ? num : 0));
  // n이 짝수라면
  console.log(numArr);
  return numArr.reduce((sum, num) => {
    console.log(sum, num);
    return sum + (num % 2 ? 0 : Math.pow(num, 2));
  }, 0); // sum의 시작 값을 0으로 설정해주지 않아 계속 초기 sum 값이 1인 문제가 발생하였음!
}

console.log(solution(10));
