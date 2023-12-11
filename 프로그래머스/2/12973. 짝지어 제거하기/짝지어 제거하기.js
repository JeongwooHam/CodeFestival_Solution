const solution = (s) => {
    const stack = [];
    
    if(!s.length) return 0
    
    for(let i = 0; i < s.length; i++){
        // 스택의 값과 비교하기
        if(s[i] === stack[stack.length-1]) stack.pop()
        else stack.push(s[i])
    }
        
    return stack.length ? 0 : 1
}