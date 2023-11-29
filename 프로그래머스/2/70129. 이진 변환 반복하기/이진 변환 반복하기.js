function solution(s) {
    let cnt = 0;
    let zero = 0;
    
    const onlyone = (str) => str.split("").filter(v => Number(v)).join("").length;
    
    while(s !== "1"){
        zero += s.length - onlyone(s);
        s = onlyone(s).toString(2)
       
        cnt++;
    }
        
    return [cnt, zero]
}