/*
[연속 부분 수열 1]
N개의 수로 이루어진 수열이 주어진다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하라.
예를 들어 만약 N=8, M=6이고 수열이 아래와 같다면
1 2 1 3 1 1 1 2
합이 6이 되는 연속 부분 수열은 213, 1311, 3111로 총 3가지이다.
*/

/*
🥸 예상 풀이법
[이중 for문] > n제곱
1. 0부터 시작하는 for문
2. 내부에 1부터 시작하는 for문
3. 더하다가 변수 sum이 M과 같은 값이 되면 cnt ++ + break
4. 변수 sum이 M보다 커지면 break

[투 포인터] > o(n)
1. lt, rt 포인터 변수 생성
2. rt만 증가하면서 더해주고 sum이 6이 되는지 확인 
    - sum이 M과 같으면 cnt ++, 이후 lt 인덱스 증가
    - sum이 M보다 크면 lt 값을 빼주면서 lt 인덱스 증가
    - sum이 M보다 작아지면 rt 값을 더하면서 rt 인덱스 증가
3. rt가 끝나면 끝
*/

const mine = (m, arr) => {
  const n = arr.length;
  let lt = (rt = 0);
  let sum = 0;
  let cnt = 0;

  while (rt < n) {
    if (sum < m) sum += arr[rt++];
    else {
      if (sum === m) cnt++;
      sum -= arr[lt++];
    }
  }

  return cnt;
};

const solution = (m, arr) => {
  let cnt = (lt = sum = 0);
  const n = arr.length;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) cnt++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return cnt;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
