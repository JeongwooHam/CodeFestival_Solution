/*
@ 풀이 방법 생각해내기
1. 유저 아이디와 닉네임을 map 객체를 사용하여 관리합니다.
2. 유저 아이디가 이미 map의 key로 존재하면 해당 닉네임을 바꾸고, 없다면 추가합니다.
3. 결과 배열에 record를 변환한 값을 담습니다. 
4. 입력값이 크기 때문에 for문을 두 번 사용하는 것은 잘못된 접근으로 보이므로,
   하나의 반복문에서 처리되도록 하고 Change가 있을 때 수정이 발생하도록 합니다.
*/

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