const solution = (n, s) => {
    const calc = Math.floor(s / n)
    const red = s % n
    if(!calc) return [-1]
    if(red === 0) return Array.from({length: n}, () => calc)
    
    const small = Array.from({length: n - red}, () => calc)
    const large = Array.from({length: red}, () => calc+1)
    return small.concat(large)
}