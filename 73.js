/*
[최단 경로 찾기]

다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 
그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 

두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 

이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

데이터
graph = {'A': ['B', 'C'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F'],
         'D': ['B'],
         'E': ['B', 'F'],
         'F': ['C', 'E']}

입력
A F

출력
2
*/

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const inputArr = "A F".split(" ");
// console.log(graph[inputArr[0]]);

let cnt = 1;

function isThere(arr, target) {
  arr.forEach((el) => {
    console.log(el);
    if (graph[el].includes(target)) {
      cnt += 1;
      return cnt;
    }
  });
}

// 만약 입력 값[0]을 key로 갖는 배열에 [1] 값이 들어있다면
function 최단경로찾기(arr) {
  const standard = arr[0];
  const target = arr[1];
  if (!graph[standard].includes(target)) {
    isThere(graph[standard], target);
  }

  return cnt;
}

console.log(최단경로찾기(inputArr));

// answer
/*
const user_input = "A E".split(" ");
const start = user_input[0];
["A"];
const end = user_input[1];
["F"];
let queue = [start];
["A"];
let visited = [start];
["A"];

function solution() {
  let count = -1;

  // queue의 길이가 0이 아닐때까지
  while (queue.length !== 0) {
    // count에 계속 1씩 더해주기
    count += 1;

    let size = queue.length;

    for (let i = 0; i < size; i++) {
      // queue를 0부터 1만큼만 잘라서
      let node = queue.splice(0, 1);

      // 만약 그 값이 ['F']와 같다면 함수 끝
      if (node == end) {
        return count;
      }

      // graph[0번째 값]의 각 인덱스별로
      // visited가 0번째 값으로 시작하는 배열의 각 인덱스로 시작하는 값들을 포함하지 않으면 visited에 해당 값 넣고 queue에도 추가
      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}

console.log(solution());
*/
