// 계차 수열

const solution = (n) => {
  // row: 계차 수열의 줄, cnt: 해당 row에서의 위치
  let row = (cnt = 1);
  // 1인 경우 기본값 반환
  let num = 1; // 분자(좌항)
  let den = 1; // 분모(우항)

  // 두 번째 줄에는 두 개, 세 번째 줄에는 세 개...
  for (let i = 2; i <= n; i++) {
    if (cnt === row) {
      // 값의 위치가 해당 row의 끝이라면
      if (row % 2 === 0) {
        //짝수줄일때는 (다음수/1)로 이어지므로
        num++; // 좌항++
      } else {
        //홀수줄일때는 (1/다음수)로 이어지므로
        den++; // 우항++
      }
      row++; //다음 줄로 넘어가고
      cnt = 1; //항의 위치를 1로 초기화
    } else {
      if (row % 2 === 0) {
        //짝수줄일때는
        // 분자는 오름차순, 분모는 내림차순
        num++;
        denominator--;
      } else {
        //홀수줄일때는
        // 분자는 내림차순, 분모는 오름차순
        num--;
        den++;
      }
      cnt++; // 항의 위치를 다음으로 넘겨줌
    }
  }

  console.log(`${num}/${den}`);
};

console.log(solution(1)); // 1/1
console.log(solution(2)); // 1/2
console.log(solution(3)); // 2/1
console.log(solution(4)); // 3/1
console.log(solution(5)); // 2/2
console.log(solution(6)); // 1/3
console.log(solution(7)); // 1/4
console.log(solution(8)); // 2/3
console.log(solution(9)); // 3/2
console.log(solution(14)); // 2/4

/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
16 17 18 19 20 21
*/
