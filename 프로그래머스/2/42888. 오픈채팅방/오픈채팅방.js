const Command = {
    Enter: "들어왔습니다.",
    Leave: "나갔습니다."
}

function solution(record) {
    const splitRecord = record.map((rec) => rec.split(" "))
    const nameMap = new Map()

    for([_, id, nickname] of splitRecord){
       if(!nickname) continue;
       if(nameMap.get(id) !== nickname) nameMap.set(id, nickname)
       else continue;
     }
    
    const result = [];
    for([command, id, nickname] of splitRecord){
       if(!Command[command]) continue;
       result.push(`${nameMap.get(id)}님이 ${Command[command]}`)
     }
    return result;
}