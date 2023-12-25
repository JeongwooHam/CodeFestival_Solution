function solution(food) {
    const result = [0]
    for(let i = food.length-1; i > 0; i--){
        let num = food[i];
        if(num % 2) num -= 1
        const f = (i+"").repeat(num/2)
        result.push(f)
        result.unshift(f)
    }
    return result.join("")
}