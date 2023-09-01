/*
[저주의 숫자 3]
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 
3x 마을 사람들의 숫자는 다음과 같습니다.

|10진법|변환 후|10진법|변환 후|
|1|1|6|8|
|2|2|7|10|
|3|4|8|11|
|4|5|9|14|
|5|7|10|16|

> 전체 숫자에서 3의 배수가 없다고 생각하면 됨

정수 n이 매개변수로 주어질 때, 
n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

1 1
2 2
3 4
4 5
5 7
6 8 
7 10
8 11
9 14
10 16
11 17
12 19
13 20
14 22
15 25
*/
// 이번에는 더 간단하게 푸는 방법들이 있었는데 생각해내지 못한 것 같다.

const hasThree = (num) => {
  const toStr = num + "";
  const result = [...toStr].filter((el) => el === "3").length;
  return !!result;
};

const solution = (n) => {
  let cnt = 0;
  let num = 0;
  while (cnt < n) {
    while (hasThree(num)) num += hasThree(num);
    if ((num + 1) % 3 === 0) {
      num += 2;
    } else {
      num += 1;
    }
    while (hasThree(num)) num += hasThree(num);
    if (num % 3 === 0) {
      num += 1;
    }
    cnt += 1;
    // console.log("res", cnt, num);
  }
  return num;
};

// console.log(solution(15));
console.log(solution(40));

/*
const hasThree = (num) => {
  const toStr = num + 1 + "";
  return [...toStr].includes("3");
};

// 3의 배수가 아니지만 3을 포함하는 숫자를 제외하지 못함
const solution = (n) => {
  let cnt = 0;
  let num = 0;
  while (cnt <= n) {
    if ((num + 1) % 3 === 0) {
      num += 2;
      if (hasThree(num)) num += 1;
    } else {
      num += 1;
    }

    cnt += 1;
  }
  return num;
};

*/
