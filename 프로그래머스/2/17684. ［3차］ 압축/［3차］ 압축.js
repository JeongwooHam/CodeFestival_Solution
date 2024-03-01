const dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function solution(msg) {
    const answer = [];
    let targetIdx = 0;
    let targetStr = "";
    while(msg.length !== targetIdx){
        targetStr = targetStr + msg[targetIdx]
        if(dictionary.includes(targetStr)){
            // 만약 사전에 값이 있다면 그냥 넘어간다.
            targetIdx++
        }else{
            // 만약 사전에 값이 없다면
            const previousStr = targetStr.slice(0, targetStr.length-1)
            answer.push(dictionary.findIndex(words => words === previousStr) + 1);
            dictionary.push(targetStr)
            targetStr = ""
        }
        
        if(targetIdx === msg.length){
            answer.push(dictionary.findIndex(words => words === targetStr) + 1);
        }
    }
    return answer
}