/*
369 게임을 하는데 조금 이상한 규칙이 있습니다. 
3이나 6, 9 일 때만 박수를 쳐야합니다. 
예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 
36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.
(3 > 6 > 9 > 33 > 36 > 39 > 63 > 66 > 69 > ...)

n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

입력
'93'

출력
10
*/

const inputNum = parseInt("36");

console.log((36 + "").split("").map((el) => parseInt(el)));

const resultArr = [];

function solution(num) {
  // 입력한 숫자까지의 모든 수를 배열에 담아서
  const arr = Array.from({ length: num }, (_, i) => i + 1);
  //   console.log(arr);

  // 각 요소에 대해 아래의 과정 수행하기 (각 요소 문자열로 형변환 > split으로 앞 뒤로 쪼개서 > 다시 숫자로 형변환)
  let targetArr = arr.map((el) =>
    (el + "").split("").map((element) => parseInt(element))
  );
  console.log(targetArr);

  // 이후 각 요소에 해당하는 배열 중 every 를 사용하여 true인 경우만 resultArr에 담아주기
  targetArr.forEach((elArr) => {
    if (elArr.every((el) => el % 3 === 0) && !elArr.some((el) => el === 0))
      return resultArr.push(elArr);
  });

  console.log(resultArr);

  // resultArr.length 반환하기
  return resultArr.length;
}

console.log(solution(inputNum));
