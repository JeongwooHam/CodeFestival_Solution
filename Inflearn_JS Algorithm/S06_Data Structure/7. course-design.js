/*
[교육 과정 설계]
현수는 1년 과정의 수업계획을 짜야 한다.
수업중에는 필수과목이 있다. 
이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있다.
만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 
필수과목은 C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 한다.
여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고, 
A과목은 C와 B를 이수한 후에 들어야 한다는 것을 말한다.
현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만
C, G, E, A, D, B 순서로 짰다면 잘못 설계된 수업계획이 된다.
수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석한다.
수업계획서상의 각 과목은 무조건 이수된다고 가정한다.
필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력하는 프로그램을 작성하라.
*/

/*
🥸 예상 풀이법
1. queue 배열을 만든다.
2. cur에 for문을 돌리면서 order.includes(x)면 queue에 담는다.
3. queue의 길이가 order.length와 같아졌을 때 join한 결과가 order와 같으면 YES, 아니면 NO
> 전체를 다 도는게 불필요한 것 같다.

🚩 해답
- queue에 order 담아놓고
- includes(x)가 참일 때 queue[0]이랑 같은 값이 아니면 바로 return 'NO' 해버리기
*/

const solution = (order, cur) => {
  const queue = order.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  // 필수과목을 빼먹은 경우
  if (queue.length > 0) return "NO";
  return "YES";
};

console.log(solution("CBA", "CBDAGE"));
