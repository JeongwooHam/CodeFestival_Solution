/*
중복 단어 제거

N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램 작성하기
출력하는 문자열은 원래의 입력 순서를 유지해야 함
*/

const remove = (s) => {
  return [...new Set(s)];
};

console.log(remove(["good", "time", "good", "time", "student"]));
