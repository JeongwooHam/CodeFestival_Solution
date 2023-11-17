/*
[문자열 뒤집기]
https://school.programmers.co.kr/learn/courses/30/lessons/181905
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, 
my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

const solution = (str, s, e) => {
  const Arr = [...str];
  Arr.splice(s, e - s + 1, [...str.slice(s, e + 1)].reverse().join(""));
  return Arr.join("");
};

console.log(solution("Progra21Sremm3", 6, 12));
console.log(solution("Stanley1yelnatS", 4, 10));
console.log(solution("banaan", 4, 6));
