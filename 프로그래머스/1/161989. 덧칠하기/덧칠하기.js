function solution(n, m, section) {
    let answer = 0;
    if(m === 1) return section.length
    const wall = Array.from({length: n}, (_, i) => i + 1).map(block => !section.includes(block))

    for(let i = 0; i < section.length; i++){
        const block = section[i]
        if(wall[block-1]) continue;
        for(let j = 0; j < m; j++) wall[block - 1 + j] = true;
        answer++
    }

    return answer
}