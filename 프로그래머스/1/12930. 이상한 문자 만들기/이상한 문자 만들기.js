function solution(s) {
    const handleChange = (str) => {
        const answer = str.split("")
        for(let i = 0; i < answer.length; i++){
            [answer[i]] = i%2 ? answer[i].toLowerCase() : answer[i].toUpperCase()
        }
        return answer.join("")
    }
    
    const result = s.split(" ").map((el) => handleChange(el))
    
    return result.join(" ")
}