/*
[뒤집은 소수]
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
예를 들어 32를 뒤집으면 23이고 23은 소수이므로 23을 출력하세요.
단 910의 경우 뒤집으면 19로 숫자화되는 것으로 간주합니다.
첫 차리부터의 연속된 0은 무시합니다.
*/

/*
🥸 예상 풀이법
1. answer 배열을 생성한다.
2. 인자로 받아온 배열에 for문을 돌려서 각 요소에 대한 계산을 진행한다.
    1) 숫자를 새로운 변수에 담은 뒤 문자열로 형변환하여 reverse한다.
    2) 변환된 값을 다시 숫자로 형변환한다.
    3) 해당 값에 대해 for문을 돌린다. 이때 i의 값은 해당 값보다 작고, 1씩 감소한다.
    4) 나머지가 0인 값이 있을 경우 반복문을 중단하고 없다면 answer 배열에 push 한다.
3. answer을 return한다.
*/

const isPrime = (n) => {
  if (num === 1) return false;
  // 과정을 줄이기 위해 제곱근까지만 돌도록 범위 조정
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i--) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution_n = (arr) => {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    // 원본이 필요 없으므로 tmp 생성할 필요 없음
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    // 소수인지 확인하는 함수 생성
    if (isPrime(res)) answer.push(res);
  }
};

const solution_str = (arr) => {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));

    // 소수인지 확인하는 함수 생성
    if (isPrime(res)) answer.push(res);
  }
};
