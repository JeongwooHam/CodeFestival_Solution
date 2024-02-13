const isOrderMatch = (origin, target) => {
    if(origin.length < target.length) return false
    if(origin.length === target.length){
        return origin.every((w, i) => w === target[i])
    }else{
        // 단어의 순서로 변형하기
        const arr = target.map((el) => origin.findIndex(w => w === el));
        // 건너뛴 카드가 없도록 검사하기
        if(arr[0] !== 0) return false
        return arr.every((order, i, originArr) => {
            if(!originArr[i-1] && originArr[i-1] !== 0) return originArr[i+1] - order === 1
            if(!originArr[i+1] && originArr[i+1] !== 0) return order - originArr[i-1] === 1
            return (originArr[i+1] - order === 1) && (order - originArr[i-1] === 1)
        })
    }
}

function solution(cards1, cards2, goal) {
    const c1 = goal.filter(w => cards1.includes(w))
    const c2 = goal.filter(w => cards2.includes(w))
    const result = isOrderMatch(cards1, c1) && isOrderMatch(cards2, c2)       
    return result ? "Yes" : "No";
}