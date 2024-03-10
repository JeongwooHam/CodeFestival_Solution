function solution(n, t, m, p) {
    let whole = ""
    let tube = ""
    let cur = 0;
    
    while(tube.length !== t){
        const trans = cur.toString(n).toUpperCase();
        whole += (trans + "");
        if(whole.length < m){
            cur++
            continue;
        }
        else{
            const target = whole.split("").slice(0, m)
            tube += target[p-1]
            whole = whole.slice(m)
            cur++
        }
    }
    
    return tube
}