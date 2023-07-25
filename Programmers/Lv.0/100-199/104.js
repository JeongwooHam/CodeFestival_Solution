/*
[피자 나눠먹기 (2)]
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 
피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

// 유클리드 호제법을 사용해 최대공약수(GCD), 최소공배수(LCM)를 구하였음
// 유클리드 호제법: num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다. r이 0이라면, 그 때의 num2가 최대공약수이다.
function solution(n) {
  const GCD = (num1, num2) =>
    num1 % num2 === 0 ? num2 : GCD(num2, num1 % num2);
  const LCM = (n * 6) / GCD(n, 6);

  return LCM / 6;
}
