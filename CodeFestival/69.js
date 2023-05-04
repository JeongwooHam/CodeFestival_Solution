/*
골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 
2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 
이때 하나의 소수를 두 번 사용하는 것은 허용한다. 

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53 >> (50-3) + (50+3)
56 == 19 + 37 >> (28-9) + (28+9)

2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요. 

해당 문제의 출력 형식은 자유롭습니다. 
가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.

주어진 짝수를 2로 나눈 뒤 1부터 하나씩 더하면서 빼보기
앞의 값이나 뒤의 값 중 하나라도 소수가 아니면 1 더해서 다시 구하기

소수 판별법: 숫자보다 작은 수들에 대해서 1씩 빼면서 나머지가 0이 나오는 값이 있으면 소수가 아닌 것
*/
const inputNum = 56;

// 소수 판별 함수
function primeNum(n) {
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(primeNum(10));
console.log(primeNum(49));

// 골드바흐 파티션 출력 함수
function Goldbach(num) {
  // (num/2 - x)(num/2 + x) >> x에 1씩 더하면서 둘다 소수인 것 구하기
  const n = num / 2;
  let cnt = 1;

  // num = (n-cnt)+(n+cnt)
  while (true) {
    cnt++;
    console.log(n - cnt, n + cnt);
    if (primeNum(n - cnt) && primeNum(n + cnt)) break;
  }

  return [n - cnt, n + cnt];
}

console.log(Goldbach(inputNum));
