/*
학교가 끝난 지원이는 집에 가려고 합니다. 
학교 앞에 있는 버스 시간표는 너무 복잡해서 
버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

버스 시간표와 현재 시간이 주어졌을 때 
버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
  만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다. (time보다 작다면 출력하기)

입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
*/
console.log("12:30" < "12:10");
console.log(1320 - 1240);
// 시간 형태로 전체 입력값 바꿔주기
console.log(13 * 60 + 20 - (12 * 60 + 40));

const resultArr = [];

function Bus(timeTable, time) {
  timeTable = timeTable.map((el) => el.split(":"));
  console.log(timeTable);

  // 시간 형태로 바꿔주기
  const newTable = timeTable.map(
    (el) => parseInt(el[0]) * 60 + parseInt(el[1])
  );
  console.log(newTable);
  time = time.split(":");
  const newTime = parseInt(time[0]) * 60 + parseInt(time[1]);
  console.log(newTime);

  // 결과값 출력하기
  newTable.forEach((el) => {
    // 만약 현재시간보다 이전이라면
    if (el < newTime) {
      resultArr.push("지나갔습니다.");
    } else {
      resultArr.push(
        // 문자열의 공백을 원하는 값으로 채워주는 함수 .padStart, .padEnd
        `${String(Math.floor((el - newTime) / 60)).padStart(
          2,
          "0"
        )}시간 ${String((el - newTime) % 60).padStart(2, "0")}분`
      );
    }
  });

  return console.log(resultArr);
}

Bus(["12:30", "13:20", "14:13"], "12:40");
