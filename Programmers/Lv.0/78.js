/*
[가위바위보]
가위는 2 바위는 0 보는 5로 표현합니다. 
가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
*/
function solution(rsp) {
  const result = [...rsp].map((el) => {
    if (el === "0") return 5;
    if (el === "2") return 0;
    return 2;
  });
  return result.join("");
}

// 🌟객체 사용해서 더 깔끔하게 코드 짜는 방법!!!
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
