function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    
    d.sort((a, b) => a - b)
    
    for(let i = 0; i < d.length; i++){
        if(d[i] > budget) continue;
        let cnt = 1
        sum += d[i]
        for(let j = 1; j < d.length; j++){
            if((sum + d[j]) <= budget) {
                cnt++
                sum += d[j]
            }
        }
        answer = Math.max(answer, cnt)
    }
    
    return answer;
}