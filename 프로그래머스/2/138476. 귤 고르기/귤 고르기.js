const makeMap = (str) => {
    const map = new Map();
    for(let i = 0; i < str.length; i++){
        const key = str[i]
        if(map.has(key)){
            map.set(key, map.get(key) + 1)
        }else{
            map.set(key, 1)
        }
    }
    return map
}

function solution(k, tangerine) {
    const sortedMap = [...makeMap(tangerine)].sort(([key1, val1], [key2, val2]) => val2 - val1)
    let cnt = 0;
    
    for([_, val] of sortedMap){
        if(k <= 0) break;
        k -= val
        cnt++
    }
    
    return cnt
}