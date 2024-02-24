function solution(numbers) {
    const length = numbers.length
    const result = Array.from({length}, () => -1);
    const compare = []
    
    for(let i = length - 1; i >= 0; i--){
        const target = numbers[i]
        while(compare.length && target >= compare.at(-1)) compare.pop();
        if(compare.length) result[i] = compare.at(-1);
        compare.push(target)
    }
    
    return result
}