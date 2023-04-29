/*
[너비 우선 탐색]
너비(Breadth First Search) 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 
목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 
그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

        E
    D       A
 F        C   B  

다음과 같이 입력이 주어질 때 
너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

데이터
graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}

출력
E D A F C B
*/

const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

// E 출력 > E의 각 요소 출력 > 각 요소의 요소들 출력 > 1번째 요소 ~ 하나씩 검색해서 각 요소를 키로 갖는 배열 출력 > 길이 1개짜리 배열만 남으면 종료
const resultArr = ["E"];

function findChild(el) {
  // 부모 노드를 가리키는 0번째 요소를 제외한 값에 대해서 해당 값을 key로 갖는 value가 있는지 찾기
  // 해당 value의 길이가 2 이상이면 0번째 값 제외하고 전부 출력
  // 해당 value의 길이가 1이라면 종료
  if (graph[el][1]) {
    for (let i = 1; i < graph[el].length; i++) {
      resultArr.push(graph[el][i]);
    }
    for (let i = 1; i < graph[el].length; i++) {
      findChild(graph[el][i]);
    }
  }
}

function BFS(obj) {
  obj.E.forEach((el) => {
    resultArr.push(el);
  });

  obj.E.forEach((el) => {
    findChild(el);
  });
  return resultArr.join(" ");
}

console.log(BFS(graph));
