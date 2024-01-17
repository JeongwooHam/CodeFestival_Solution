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