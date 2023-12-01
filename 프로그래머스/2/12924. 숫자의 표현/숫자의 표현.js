function solution(n) {
    let result = 1, cnt = 1;
    n -= cnt;
    while(n > 0){
        cnt++;
        n = n - cnt;
        if(n % cnt === 0) result++ 
    }
    return result;
}