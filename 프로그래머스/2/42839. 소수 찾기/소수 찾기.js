const getNumSet = (str) => {
    const set = new Set();
    
    const generateCombinations = (cur, rem) => {
        if (rem.length === 0) return;

        for (let i = 0; i < rem.length; i++) {
            const nextDigit = rem[i];
            const newCurrent = cur + nextDigit;
            const newRemaining = rem.slice(0, i) + rem.slice(i + 1);
            set.add(Number(newCurrent));
            generateCombinations(newCurrent, newRemaining);
        }
    };

    generateCombinations('', str);
    return set;
};

const isDec = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

const solution = (numbers) => {
    const numSet = getNumSet(numbers);
    return [...numSet].filter((n) => isDec(n) && n !== 1).length; // 소수 판별 시 1 제외
};