let n = require('fs').readFileSync('/dev/stdin');

let answer = 0;

while(true){
    if(n % 5 === 0){
        console.log(n/5 + answer)
        break;
    }
    if(n < 0){
        console.log(-1);
        break;
    }
    
    answer++
    n -= 3
}