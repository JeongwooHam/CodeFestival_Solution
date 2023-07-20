/*
[0 떼기]
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(n_str) {
  let result = n_str;
  for (let i = 0; i < n_str.length; i++) {
    if (Number(n_str[i])) break;
    result = result.substring(1);
  }
  return result;
}

/*
[slice와 substring의 차이?🤔]
1. start 값이 end 값보다 작은 경우
    - slice: 빈 문자열 반환
    - substring: 두 인덱스 값을 서로 교환하여 정상적으로 동작
2. start, end에 음수인 값을 전달할 경우
    - slice: 문자열의 마지막 인덱스를 기준으로 뺀 값을 사용해서 메소드를 정상적으로 수행함
    - substring: 음수를 0을 변경해서 메소드를 수행함
* 시간 복잡도는 동일!
*/

// 엄청 간단한 풀이법
// 문자열을 숫자로 형변환 시 앞의 0이 모두 사라진다는 점에서 착안한 것으로 보임
const solution = (str) => String(Number(str));

// 또는
const solution = (s) => +s + "";
