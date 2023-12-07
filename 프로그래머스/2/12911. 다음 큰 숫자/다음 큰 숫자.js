const countOne = (num) => num.toString(2).match(/1/g).length

const solution = (n) => {
    
    for(let i = n+1; i > n; i++){
        if(countOne(n) === countOne(i)) {
            return i;
        }
    }

}