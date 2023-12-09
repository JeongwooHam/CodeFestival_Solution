const solution = (n) => {
    const t = [];
    for(let i = 0; i <= n; i++){
        if(t.length < 2) t.push(i);
        else{t.push((t[i-1] + t[i-2])%1234567)}
    }
    return t[n]
}