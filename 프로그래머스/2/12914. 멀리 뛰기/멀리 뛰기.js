/*
1. 피보나치 수열로 풀이하기
2. 이때 인접한 두 항의 값만 알면 되므로 두 항을 나타내는 변수를 생성한다.
3. 3번째 항부터 for문을 돌려 원하는 값을 도출한다.
*/

function solution(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    let a = 1, b = 2;
    for(let i = 3; i <= n; i++){
        [a, b] = [b, a];
        b = (b+a) % 1234567
    }
    return b
}