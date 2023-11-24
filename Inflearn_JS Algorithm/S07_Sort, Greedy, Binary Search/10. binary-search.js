/*
[이분검색]
임의의 N개의 숫자가 입력으로 주어집니다. 
N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 
이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요. 
단 중복값은 존재하지 않습니다.
*/

/*
🥸 예상 풀이법
1. arr.sort((a, b) => a - b)
2. 원본 배열의 중앙값부터 검색을 시작한다. 인덱스 변수 idx에 Math.floor(arr.length/2)를 담고 시작한다.
3. 만약 중앙값보다 m이 작으면 왼쪽 배열, 크면 오른쪽 배열에 대해 검색을 계속한다.
4. 해당 부분만 slice해서 검색한 뒤 나온 idx 값을 왼쪽이면 빼주고 오른쪽이면 더해준다.
5. 같은 값이 나오면 멈추고 idx 값을 return 한다.

🚩 해답
1. mid = Math.floor(lt+rt/2)
2. if(arr[mid] === target)
3. false면 rt 값 옮긴 뒤 다시 검색 진행
*/

const solution = (m, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt * rt) / 2);
    if (arr[mid] === m) {
      answer = mid + 1; // ~번째이므로 index + 1
      break;
    } else if (arr[mid] > m) {
      // target 값이 더 작은 경우
      rt = mid - 1;
    } else {
      // target 값이 더 큰 경우
      rt = mid + 1;
    }
  }
  return answer;
};

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
