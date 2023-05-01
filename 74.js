/*
[최장 경로 찾기]
다음과 같이 노드의 연결 관계가 주어집니다. 
입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다. 
우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다. 

최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

입력
1 7

graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6], >> 3 4 5 6
  3: [1, 2, 7], >> 2
  4: [1, 2, 5, 6], >> 2 5 6
  5: [2, 4, 6, 7], >> 2 4 6
  6: [2, 4, 5, 7], >> 2 4 5
  7: [3, 5, 6],
};


출력
6

1 > 2 > 3 > 7
1 > 3 > 2 > 

1 > 3 > 2 > 4 > 5 > 6 > 7

*/

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

console.log(graph);

const inputArr = "1 7".split(" ");
const start = parseInt(inputArr[0]);
const end = parseInt(inputArr[1]);

//answer

// 대기열에 첫 번째 값 넣고 시작하기
let queue = [start];
// 방문 기록 배열은 빈 상태로 시작하기
let visited = [];

function solution(n, visited) {
  // node = 대기열의 마지막 값 (처음에는 첫 번째 값인 1로 시작할 것)
  let node = n[n.length - 1];
  // 길이의 초기값은 0
  let length = 0;

  // node가 끝 값과 같으면
  if (node == end) {
    // 종료 시 방문 기록 배열의 길이를 반환
    return visited.length;
  }

  // 만약 방문 기록 배열이 node를 포함한다면
  if (visited.includes(node)) {
    // 종료 시 방문 기록 배열의 길이를 반환
    return visited.length;
  } else {
    // 포함하지 않는다면
    visited.push(node); // 방문 기록 배열에 node 넣기
  }

  // 최대값을 빈 배열로 선언
  let max = [];

  for (let next_node in graph[node]) {
    // 대기열에 grape[node]의 각 요소 넣기
    n.push(graph[node][next_node]);

    // 최대값에 length와 queue, visited 넣은 solution 함수의 return 값 넣기
    max.push(length, solution(n, visited));

    // this를 받고 싶지 않으면 함수의 첫 번째 파라미터를 null로 설정해줌
    // Math.max만 쓰면 배열을 받지 못하므로 .apply를 써주어 max 배열을 받는 것
    // 배열의 각 요소를 순차적으로 검사하여 그 중 최대값을 length에 담아줌
    length = Math.max.apply(null, max);

    // queue의 마지막 값을 삭제해줌 (node 값을 바꾸기 위해)
    n.pop();
  }
  return length;
}

console.log(solution(queue, visited));
