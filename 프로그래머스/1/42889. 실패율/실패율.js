function solution(N, stages) {
    const stage = Array.from({length: N}, (_, i) => i + 1)
    const challengers = stage.map(n => stages.filter(v => v >= n).length)
    const fail = stage.map(n => stages.filter(v => v === n).length)
    const failureRate = stage.map((_, i) => fail[i] / challengers[i])
    stage.sort((a, b) => failureRate[b-1] - failureRate[a-1])

    return stage
}