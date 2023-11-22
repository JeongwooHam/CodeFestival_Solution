/*
[학급 회장 (해쉬)]
학급회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록했다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)이 쓰여 있므며
선생님은 그 기호를 발표하고 있다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하라.
단, 반드시 한 명의 학급회장이 선출되도록 투표 결과가 나왔다고 가정한다.

- 첫 줄에는 반 학생 수 N이 주어진다.
- 두 번째 줄에 N 개의 투표 용지에 쓰여 있던 각 후보의 기호가 선생님의 발표 순서대로 문자열로 입력된다.

- 15, BACBACCACCBDEDE > C
*/

// @ notes
/*
let sH = new Map() > 해시로 사용될 맵 객체 생성 (key, value로 구성)

- 값 넣기: sH.set(key, value)
- 값 수정하기: sH.set(key, sH.get(key)+1)
*/

function solution(s) {
  let answer;
  let sH = new Map();

  for (let x of s) {
    // x라는 키 값이 존재하는지 확인
    if (sH.has(x)) sH.set(x, sH.get(x) + 1); // 키 값이 있다면 1 더하기
    else sH.set(x, 1); // 키 값이 없다면 1부터 시작하기
  }

  // 최대값 구하기
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of sH) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
