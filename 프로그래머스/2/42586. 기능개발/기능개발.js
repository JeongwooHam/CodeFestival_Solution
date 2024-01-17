/*
@ 풀이 방법 생각하기
1. progresses 배열에 map을 사용하여 남은 분량을 구한다.
2. 남은 분량을 speed로 나눈 뒤 올림한 값을 구한다.
3. for문을 돌린다.
  - 배열의 가장 앞에 있는 값을 기준점으로 삼는다.
  - 반복하면서 기준점보다 같거나 작은 값이면 배열에서 shift()하면서 cnt++
  - 기준점보다 큰 값이 나오면 멈추고 결과 배열에 그때까지의 cnt를 담는다.
  - 배열의 처음부터 다시 시작한다.
*/

function solution(progresses, speeds) {
    const red = progresses.map((progress, i) => Math.ceil((100 - progress)/speeds[i]))
    const result = []
    for(let i = 0; i < red.length; i++){
        let cnt = 1
        for(let j = i+1; j < red.length; j++){
            if(red[i] >= red[j]){
                cnt++
            }else{
                break;
            }
        }
        result.push(cnt)
        i += cnt-1
    }
    
    return result
}