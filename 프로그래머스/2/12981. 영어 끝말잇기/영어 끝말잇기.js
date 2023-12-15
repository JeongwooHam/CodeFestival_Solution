const solution = (n, words) => {
    let last = words[0][0];
    const history = [];
    let result = [0, 0];
    
    words.every((word, i) => {
        if(history.includes(word)){
            result = [i%n+1, Math.floor(i/n)+1];
            return false;
        }
        if(word[0][0] !== last){
            result = [i%n+1, Math.floor(i/n)+1];
            return false;
        }
        last = word.slice(-1);
        history.push(word);
        return true
    })
    
    return result
}