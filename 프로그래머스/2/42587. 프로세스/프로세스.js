function solution(priorities, location) {
    let cnt = 0
    const arr = priorities.map((x, i) => ({priority: x, idx: i}))
        
    while(arr.length){
        const val = arr.shift();
        const isNotMax = arr.some(x => x.priority > val.priority)
        if(isNotMax){
            arr.push(val)
        }else{
            cnt++
            if(val.idx === location) break;
        }
    }

    return cnt;
}