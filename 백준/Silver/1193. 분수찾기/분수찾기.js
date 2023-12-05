// 계차 수열

const solution = (n) => {
  let num = Number(n);
  // row: 계차 수열의 줄, cnt: 해당 row에서의 위치
  let cnt = 0;
  // 1인 경우 기본값 반환
  const asc = 1; // 오름차순
  const des = 1; // 내림차순

  // 1부터 빼줘서 몇 번째 그룹인지 찾기
  while (num > 0) {
    cnt++;
    n = n - cnt;
  }

  for (let i = 1; i <= cnt; i++) {
    asc.push(i);
    des.push(cnt - i);
  }

  if (cnt % 2 === 0) {
    console.log(`${asc[n + cnt - 1]}/${des[n + cnt - 1]}`);
  } else {
    console.log(`${des[n + cnt - 1]}/${asc[n + cnt - 1]}`);
  }
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
