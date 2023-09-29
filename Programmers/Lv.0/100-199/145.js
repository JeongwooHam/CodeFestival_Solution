/*
[합성수 찾기]
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
*/

// @ notes
/*
- 제곱근의 정수까지만 반복하는 이유: 어떤 수의 약수 중 가장 큰 값은 해당 값의 제곱근을 넘어가지 않는다.
*/

const solution = (n) => {
  let isComposite = new Set();
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (!!!(i % j)) cnt += 1;
      if (cnt >= 3) isComposite.add(i);
    }
  }

  return isComposite.size;
};

console.log(solution(10));
console.log(solution(15));
