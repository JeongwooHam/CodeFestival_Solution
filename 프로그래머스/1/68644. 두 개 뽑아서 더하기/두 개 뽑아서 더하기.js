/*
@ 풀이 방법 생각하기

1. 이중 for문을 사용하여 배열의 각 요소를 더한다.
2. 결과를 나타내는 set를 생성하여 더한 값을 담는다.
3. set를 배열에 전개하여 정렬한 뒤 반환한다.
*/

function solution(numbers) {
    const result = new Set();
    
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = 1; j < numbers.length; j++){
            if(i === j) continue;
            result.add(numbers[i] + numbers[j])
        }
    }
    
    return [...result].sort((a, b) => a - b)
}