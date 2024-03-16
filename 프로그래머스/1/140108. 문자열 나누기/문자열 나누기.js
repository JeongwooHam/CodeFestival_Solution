function solution(s) {
    let cnt = 0;
    
    while(s.length){
        let target  = 0;
        let others = 0;
        if(s.length === 1){
            cnt++;
            s = "";
            break;
        }
        for(let i = 0; i < s.length; i++){
            const X = s[0];
            s[i] === X ? target++ : others++;
            if(target === others){
                cnt++
                s = s.slice(i+1)
                break;
            }
            if(i === s.length-1 && target !== others){
                cnt++
                s = ""
                break;
            }
        }
    }
    
    return cnt
}