// x * y = brown + yellow
// x + y = (brown)/2 + 2

function solution(brown, yellow) {
    const sum = brown + yellow
    let x = y = 0;
    
    for(let i = 3; i < brown; i++){
        if(sum%i === 0){
            const val = sum / i
            if(i + val === (brown/2+2)){
                x = Math.max(i, val)
                y = Math.min(i, val)
                break;
            }
        }
    }
    
    return [x, y]
}