/*
[JadenCase 문자열 만들기]
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.
*/

function solution(s) {
  return s
    .split(" ")
    .map(
      (word) =>
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(" ");
}

console.log(solution("3people unFollowed me"));

// programmers 첫 번째 해답

function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}

// charAt: 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환
// 처음에 인덱스로 접근한 방법([0])이 오류가 난 이유는 공백 문자가 연속으로 오는 상황을 고려하지 않았기 때문!
