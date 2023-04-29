/*
깊이 우선 탐색(Depth First Search)이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 
목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 
깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

데이터
graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}

각 value 배열의 0번쨰 값: 부모 노드, 1번째 값~ : 자식 노드

최상단 노드의 0번째 요소 > 0번째 요소를 키로 갖는 배열 > 1번째 값부터 각 값을 키로 갖는 배열 찾기 > 배열의 길이가 1이면 끝 >> 최상단 노드의 1번째 요소 ... 

출력
E D F A C B
*/
const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

const resultArr = ["E"];

function findChild(el) {
  // 부모 노드를 가리키는 0번째 요소를 제외한 값에 대해서 해당 값을 key로 갖는 value가 있는지 찾기
  // 자식 노드(1번째 값~)가 존재한다면
  if (graph[el][1]) {
    // 각 값을 다시 검사해주고
    for (let i = 1; i < graph[el].length; i++) {
      findChild(graph[el][i]);
    }
    // 부모 노드만 존재하는 요소가 된다면 해당 값을 넣어주기
  } else {
    resultArr.push(el);
  }
}

function DFS(obj) {
  for (let i = 0; i < obj.E.length; i++) {
    // 최상위 노드의 각 요소의 자식 요소 찾기
    //   console.log(graph[graph.E[i]]);
    resultArr.push(obj.E[i]);

    findChild(obj.E[i]);
  }
  return resultArr.join(" ");
}

console.log(DFS(graph));
