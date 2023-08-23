/*
[외계어 사전]
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 
외계행성의 언어를 공부하려고 합니다. 
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 
존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
*/

// @ notes
/*
[어떻게 풀 수 있을까?]
1. 단어를 배열로 만들기
2. 배열에서 spell에 있는 요소들 filter
*/

const solution = (spell, dic) => {
  const newSpell = spell.sort();
  const newDic = dic.map((word) => word.sort());

  const filteredDic = newDic.map((wordArr) =>
    wordArr.filter((word) => spell.includes(word))
  );

  const result = filteredDic.some(
    (word) => word.join("") === newSpell.join("")
  );

  return result ? 1 : 2;
};

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
