function solution(s){
    const stack = [];
    
    const arr = s.split("");
    
    for(let x of arr){
        if(x === '('){
            // 여는 괄호면 스택에 쌓기
            stack.push(x)
        }else{
            // 닫는 괄호면 스택에서 빼기
            if(!stack.length) return false; // 닫는 괄호가 더 많으면
            stack.pop(x)
        }
    }
    
    // 여는 괄호가 더 많으면
    if(stack.length > 0) return false;
    
    return true
}