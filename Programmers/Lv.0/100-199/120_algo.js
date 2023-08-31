/*
[치킨 쿠폰]
프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 
서비스 치킨에도 쿠폰이 발급됩니다. 
시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
*/

// @ notes
/*
[어떻게 풀 수 있을까?]
- 치킨 1마리 당 쿠폰 한 장 > 열 장에 1마리 서비스 (서비스 치킨이어도 쿠폰 한 장)

case1: 100
- 쿠폰의 수: 100개
- 서비스의 수: 10개 > 잔여 쿠폰: 0개
- 서비스 쿠폰: 10개 + 1

case2: 1081
- 쿠폰의 수: 1081개
- 쿠폰의 수: 서비스의 수: 108개 > 잔여 쿠폰: 1개 | 발급 쿠폰: 108개
- 서비스의 수: 10개 > 잔여 쿠폰: 8개 | 발급 쿠폰: 10개
- 서비스의 수: 1개 > 잔여 쿠폰: 0개 | 발급 쿠폰: 1개
- 서비스 쿠폰: 108 + 10 + 1 + 1(잔여쿠폰 10개)

- 서비스 쿠폰: 쿠폰 10개가 모였을 때 받을 수 있음
1. 치킨 10마리 먹었을 때 1개
2. 받은 서비스의 수가 10개일 때 1개
3. 잔여 쿠폰이 10개일 때 1개

- 오답: 1999 > 222개
1999개 > 서비스 199개, 잔여쿠폰 9개, 발급 쿠폰 199개
199개 > 서비스 19개, 잔여쿠폰 9개, 발급 쿠폰 19개
19개> 서비스 1개, 잔여쿠폰 9개, 발급 쿠폰 1개
28개 > 서비스 2개, 잔여쿠폰 8개, 발급 쿠폰 2개
1개
서비스 쿠폰: 199 + 19 + 1 + 2 + 1(잔여쿠폰 28개)
*/

const solution = (chicken) => {
  let coupon = chicken;
  let service = 0;
  let result = 0;
  let rem = 0;

  while (coupon >= 10) {
    service = Math.floor(coupon / 10);
    result += service;
    rem += coupon % 10;
    coupon = service;
  }

  if (rem + coupon > 10) {
    result += Math.floor((rem + coupon) / 10);
    const NewRem = (rem + coupon) % 10;
    coupon = Math.floor((rem + coupon) / 10);
    rem = NewRem;
  }

  rem = Math.floor((rem + coupon) / 10);

  return result + rem;
};

console.log(solution(100));
console.log(solution(1081));
console.log(solution(1999));

// 엄청 간단한 풀이들이 있었는데,, 이해가 안 된다🥲
