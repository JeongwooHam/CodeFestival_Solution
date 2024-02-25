const getCombinations = (arr, cnt) => {
    const result = [];
    if(cnt === 1) return arr.map((el) => [el])
    
    arr.forEach((el, idx, originArr) => {
        const restArr = originArr.slice(idx+1);
        const comb = getCombinations(restArr, cnt-1);
        const attachTarget = comb.map((combination) => [el, ...combination]);
        result.push(...attachTarget)
    })
    
    return result
}

const isPrimeNum = (n) => {
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    var answer = -1;
    const primeNums = getCombinations(nums, 3).filter((comb) => isPrimeNum(comb.reduce((sum, num) => sum + num)))

    return primeNums.length;
}