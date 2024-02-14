const getDivisorCnt = (num) => {
    let cnt = new Set();
    
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            cnt.add(i);
            cnt.add(num/i)
        }
    }
    return cnt.size;
}

function solution(number, limit, power) {
    const answer = [];
    for(let i = 1; i <= number; i++){
        const divisors = getDivisorCnt(i);
        if(divisors > limit){
            answer.push(power)
        }else{
            answer.push(divisors)
        }
    }
    return answer.reduce((sum, num) => sum + num);
}