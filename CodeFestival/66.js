/*
탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.

입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]
*/

const 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const 규칙 = "ABD";
const resultArr = [];

//
탑.forEach((el) => {
  let result = el.split("A");
  result = result[result.length - 1].split("B");
  result = result[result.length - 1].split("D");
  if (result[result.length - 1] == "") {
    resultArr.push("불가능");
  } else {
    resultArr.push("가능");
  }
});

console.log(resultArr);

// answer
/*
function solution(전체블록, 규칙){
    let answer = [];
    for (let 부분블록 of 전체블록){
      answer.push(블록순서체크(부분블록, 규칙));
    }
    return answer;
  }
  
  function 블록순서체크(부분블록, 규칙){
    let 임시변수 = 규칙.indexOf(규칙[0]);
    for (let 문자 of 부분블록){
      if (규칙.includes(문자)){
        if (임시변수 > 규칙.indexOf(문자)){
          return '불가능';
        }
        임시변수 = 규칙.indexOf(문자);
      }
    }
    return '가능';
  }
  
  
  const 전체블록 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
  const 규칙 = 'ABCD';
  
  console.log(solution(전체블록, 규칙));
  //["가능", "불가능", "가능", "가능", "불가능"]
*/

// 주어진 문제에 대해서만 답이 맞게 출력되면 된다고 생각하였으나 어떤 규칙과 블록들을 넣어도 재사용 가능하게 만들어야 하는 문제였음
// 규칙을 변수로 주었으므로 규칙이라는 변수를 사용할 수 있는 방법을 고민했어야 했음
