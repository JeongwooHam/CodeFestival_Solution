function solution(scores) {
    const isHigherScore = (a, r, idx, arr) => {
        for(let i = 0; i < arr.length; i++){
            const [attitude, review] = arr[i]
            if(idx === i) continue;
            if(attitude > a && review > r) return true
        }
        return false
    }

    // 만약 원호가 인센티브를 받지 못하면
    if(isHigherScore(scores[0][0], scores[0][1], 0, scores)) return -1
    
    // 원호의 순위 구하기
    const Wonho = scores[0][0] + scores[0][1]
    const sum = scores.filter(([a, r]) => (a+r) > Wonho)
    const ranking = sum.filter(([a, r], i) => !isHigherScore(a, r, i, sum))
    
    return ranking.length + 1
}