/*
@ 풀이 방법 생각하기

1. 최소공배수 구하기
    - 그 전까지의 공약수 곱해두기
2. 마지막 남은 서로소 곱하기
*/

function solution(arr) {
    let LCM = Math.max(...arr);
    
    while(true){
        if(arr.every((el) => LCM % el === 0)) break;
        LCM++
    }
    
    return LCM
}