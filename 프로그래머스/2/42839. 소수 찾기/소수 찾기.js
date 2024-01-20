/*
@ 풀이 방법 생각하기
1. 각 종이 조각들로 만들 수 있는 숫자 조합들을 구한다. (set 사용)
2. 에라토스테네스의 체 공식을 사용하여 해당 조합들 중 소수를 구한다.
*/

const getNumSet = (str) => {
    const set = new Set()
     const generateCombinations = (cur, rem) => {
        if (rem.length === 0) {
            set.add(Number(cur));
            return;
        }

        for (let i = 0; i < rem.length; i++) {
            const nextDigit = rem[i];
            const newCurrent = cur + nextDigit;
            const newRemaining = rem.slice(0, i) + rem.slice(i + 1);
            set.add(Number(str[i]))
            set.add(Number(newCurrent))
            generateCombinations(newCurrent, newRemaining);
        }
    }

    generateCombinations('', str);
    return set
}

const isDec = (n) => {
    if(n < 2) return false
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

function solution(numbers) {
    const com = [...getNumSet(numbers)]
    return com.filter((n) => isDec(n)).length;
}