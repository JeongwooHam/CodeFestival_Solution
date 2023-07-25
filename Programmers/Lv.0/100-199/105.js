/*
[간단한 식 계산하기]
문자열 binomial이 매개변수로 주어집니다. 
binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 
주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(binomial) {
  return eval(binomial);
}

// 문자열로부터 **eval()**을 실행하는 것은 엄청나게 위험하므로 실제 코드에서는 사용하지 않도록 주의할 것!
