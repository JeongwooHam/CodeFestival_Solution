/*
[연속 부분수열 2]
N개의 수로 이루어진 수열이 주어진다.
이 수열에서 연속부분수열의 합이 특정숫자 M 이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하라.
만약 N=5, M=5이고 수열이 아래와 같다면
1 3 1 2 3
합이 5 이하가 되는 연속부분수열은 1 / 3 / 1 / 2 / 3 / 1, 3 / 3, 1 / 1, 2 / 2, 3 / 1, 3, 1
로 총 10가지이다.
*/

/*
🥸 예상 풀이법
1. 투 포인터 변수들을 생성한다.
2. rt를 움직이면서 해당 인덱스의 값을 빼준다. m보다 합이 같거나 작을 때까지만 cnt ++
3. m보다 합이 작아지면 lt를 움직이면서 해당 인덱스의 값을 더해준다.
*/

const mine = (m, arr) => {
  let sum = (lt = rt = cnt = 0);

  const n = arr.length;

  while (rt < n) {
    if (m < sum) {
      sum -= arr[lt++];
    } else {
      if (arr[rt] <= m) cnt++; // 이 부분 처리를 안 해줘서 실패했었음
      cnt++;
      sum += arr[rt++];
    }
  }

  return cnt;
};

const solution = (m, arr) => {
  let answer = (sum = lt = 0);
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++]; // 작아질 때까지 줄여줌
    }
    answer += rt - lt + 1;
    /*
    index  val                    rt - lt + 1
      0     1                          1
      1     3 / 1, 3                   2
      2     1 / 3, 1 / 1, 3, 1         3
    */
  }
  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));
