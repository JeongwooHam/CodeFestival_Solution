/*
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/
const inputNum = parseInt(prompt(), 10);

function isPrimeNum(num) {
  // 나누는 수가 1보다 클 때까지만 실행
  for (let i = 1; num - i > 1; i++) {
    // console.log(num - i);
    // console.log(num % (num - i));
    // 1보다 큰 수 중에 나누었을 때 나머지가 0인 값이 있다면 소수 아님
    if (num % (num - i) === 0) return console.log("NO");
  }

  return console.log("YES");
}

isPrimeNum(inputNum);

// answer

const num = prompt("숫자를 입력하세요.");

function check_prime(num) {
  // 2부터 시작하는 num보다 작은 수들로 나누었을 때
  for (let i = 2; i < num; i++) {
    const result = num % i;
    // 하나라도 나머지가 0이 되는 값이 있으면 종료
    if (result === 0) {
      console.log("NO");
      return false;
    }
  }
  if (num === 1) {
    console.log("NO");
    return;
  }
  console.log("YES");
}

check_prime(num);
