/*
@ 풀이 방법 생각하기
[dfs] 재귀함수 사용하기
- 경우의 수를 나타내는 변수인 answer를 생성한다.
- 재귀함수는 각 턴의 합계와 시작 노드를 인자로 받는다.
- 시작 노드의 값이 numbers의 길이와 같아질 경우 합계를 나타내는 변수가 target과 같은지 검사한다. > 일치할 경우 answer + 1
- 합계값에 새로운 합을 넣고 시작 노드를 +1로 설정한 다음 재귀로 함수를 호출한다. (빼주는 경우도 동일하게 진행한다.)
*/

function solution(numbers, target) {
    let answer = 0;
    const dfs = (sum, start = 0) => {
        if(start === numbers.length){
            if(sum === target) answer++
            return
        }
        dfs(sum + numbers[start], start+1)
        dfs(sum - numbers[start], start+1)
    }
    
    dfs(numbers[0], 1)
    dfs(-1*numbers[0], 1)
    
    return answer
}