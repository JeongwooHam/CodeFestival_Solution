/*
* JS 배열 메서드의 시간 복잡도
[O(1)]
    - 상수 시간 복잡도 (예: n+n > n의 값과 상관없이 + 연산 한 번만 실행)
    1. push: 인덱스 하나만 추가(지정)
    2. pop : 인덱스 하나만 삭제
    >> 이러한 이유로 shift, unshift 보다 push, pop을 이용하는게 시간적으로 유리함
[O(N)]
    - n만큼의 시간 복잡도 (예: for문에서 n만큼 순회)
    1. shift, unshift
        : 맨 앞의 값이 변화함으로 인해 전체 인덱스에 변화 발생
    2. concat, slice, splice
        : 배열을 잇고, 자르고, 값을 추가함으로 인해 전체 인덱스에 변화 발생
    3. forEach, map, filter, reduce
        : 배열의 길이만큼 배열을 순회해야 함
[O(NlogN)]
    - N*logN만큼의 시간 복잡도
    1. sort: 퀵정렬


A: 3, 5
1)  arr[i] >> 인덱스 하나에만 접근
2)  arr.push(5) >> O(1)
3)  arr.slice()
4)  arr.pop() >> O(1)
5)  arr.includes(5)
*/
