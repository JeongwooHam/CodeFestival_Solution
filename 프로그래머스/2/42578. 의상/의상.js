const getClothesCnt = (arr) => {
    const map = new Map()
    const result = []
    for(let [name, category] of arr){
        if(map.has(category)){
            map.set(category, map.get(category)+1)
        }else{
            map.set(category, 1)
        }
    }
    for(let [_, value] of map) result.push(value)
    return result
}

function solution(clothes) {
    const cnt = getClothesCnt(clothes);
    const result = cnt.reduce((m, n) => m * (n+1), 1)
    
    return result-1;
}