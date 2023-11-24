/*
[Least Recently Used]
캐시메모리는 CPU와 주기억장치(DRAM) 사이의 고속의 임시 메모리로서 CPU가 처리할 작업을 저장해 놓았다가 
필요할 경우 바로 사용해서 처리속도를 높이는 장치이다. 
워낙 비싸고 용량이 작아 효율적으로 사용해야 한다. 
철수의 컴퓨터는 캐시메모리 사용 규칙이 LRU 알고리즘을 따른다. 
LRU 알고리즘은 Least Recently Used 의 약자로 직역하자면 가장 최근에 사용되지 않은 것 정도의 의미를 가지고 있다. 
캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘입니다.

만약 캐시의 사이즈가 5이고 작업이
2 3 1 6 7
순으로 저장되어 있다면,
(맨 앞이 가장 최근에 쓰인 작업이고, 맨 뒤는 가장 오랫동안 쓰이지 않은 작업이다.)

1) Cache Miss
  : 해야할 작업이 캐시에 없는 상태로 위 상태에서 만약 새로운 작업인 5번 작업을 CPU가 사용한다면 
  Cache miss가 되고 모든 작업이 뒤로 밀리고 5번작업은 캐시의 맨 앞에 위치한다.
  5 2 3 1 6 (7번 작업은 캐시에서 삭제된다.)
2) Cache Hit 
  : 해야할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용한다면 Cache Hit가 되고, 
  앞에 있는 5, 2번 작업은 한 칸 뒤로 밀리고, 3번이 맨 앞으로 위치하게 된다.
  5 2 3 1 6 ---> 3 5 2 1 6

캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면
N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요.

<캐시 메모리 상태 변화>
1 0 0 0 0
2 1 0 0 0
3 2 1 0 0
2 3 1 0 0
6 2 3 1 0
3 2 6 1 0
5 3 2 6 1
7 5 3 2 6
*/

/*
🥸 예상 풀이법
1. 길이가 5인 빈 배열을 생성한다.
2. 원본 배열인 list에 대해 for문을 돌린다.
3. list의 각 요소에 대해 cache.includes
   - 참이면 구조분해할당으로 위치 바꾸기
   - 거짓이면 pop, unshift
4. 배열을 return한다.
*/

const solution = (s, arr) => {
  let answer = Array.from({ length: s }, () => 0);
  arr.forEach((x) => {
    // cache에 x가 있는지
    let pos = -1;
    // cache 탐색하다가 있으면 pos에 해당 인덱스 담기
    for (let i = 0; i < s; i++) if (x === answer[i]) pos = i; // cache hit
    // cache miss라면 pos는 그대로 -1
    if (pos === -1) {
      // 한 칸씩 뒤로 밀기
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      // cache hit의 경우 해당 지점부터 for문 돌기
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x; // 현재 작업 맨 앞에 넣기
  });

  return answer;
};

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));

// 고차함수로 풀어보기

const solution_2 = (s, arr) => {
  let answer = [];
  arr.forEach((x) => {
    // cache에 x가 있는지
    let pos = -1;
    // cache 탐색하다가 있으면 pos에 해당 인덱스 담기
    for (let i = 0; i < s; i++) if (x === answer[i]) pos = i; // cache hit
    // cache miss라면 pos는 그대로 -1
    if (pos === -1) {
      // 한 칸씩 뒤로 밀기
      // 제일 앞에 값을 넣고 하나씩 뒤로 밀어줌
      answer.unshift(x);
      // 크기를 5로 유지해야 함
      if (answer.length > s) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
};
