function solution(k, m, score) {
    if(score.length < m) return 0;
    score.sort((a, b) => b - a)
    let result = 0;
    
    for(let i = 0; i < score.length; i+=m){
        const target = score.slice(i, i+m)
        if(target.length < m) continue;
        result += Math.min(...target) * m
    }
    
    return result;
}