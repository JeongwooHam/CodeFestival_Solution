/*
    [병합정렬(merge sort)]

    1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 

    2. 그렇지 않은 경우에는 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

    3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

    4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
*/

/*                 array가 
                   들어갈 
                   위치     */
function mergeSort(arr) {
  // 만약 리스트의 길이가 0또는 1이면 이미 정렬된 것으로 보고 arr 그대로 return
  if (arr.length <= 1) {
    return arr;
  }

  // 길이를 2로 나눠서 소수점 이하 버림 > 절반으로 자를 기준 구해줌
  const mid = Math.floor(arr.length / 2);

  // 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눠줌
  // 왼쪽: 0부터 중앙값 전까지 자르기
  const left = arr.slice(0, mid);
  // 오른쪽: 중앙값부터 끝까지 자르기
  const right = arr.slice(mid);

  // 각 부분 리스트(left, right)를 재귀적으로 합병 정렬을 이용해 정렬하고
  // 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병함
  return merge(mergeSort(left), mergeSort(right));
}

/* 
    (1) array = [2,1,3,7,5]

    (2) mergeSort(array) = mid:2   left1[2,1] [7,3,5]right1

    (3) mergeSort(left1) = mid: 2  left2[2]   [1]right2
        >> merge(left2, right2) : [1,2]

    (4) mergeSort(right1) = mid: 1 left3[7]   [3,5]right3
        - mergeSort(left3): [7]
        - mergeSort(right3): mid 1 left4[3]   [5]right4
          >> merge(left4, right4) : [3,5]
        >> merge(left3, right3) : [3] > [3,5] > [3, 5, 7]
    >> merge(left1, right1) : [1] > [1,2] > [1,2,3] > [1,2,3,5] > [1,2,3,5,7] 

*/
function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    // left의 첫 번째 값이 right의 첫 번째 값보다 작다면 (원본 배열이 계속 수정되므로 [0]으로 인덱스 고정)
    // 이미 left와 right 내부에서는 정렬되어 온 상태이므로 left[0]보다 right[n](n>0)이 작을 가능성은 고려하지 않음
    if (left[0] < right[0]) {
      // left의 첫 번째 값을 잘라서 []의 뒤에 추가
      result.push(left.shift());
      // 아니라면 right의 첫 번째 값을 잘라서 []의 뒤에 추가
    } else {
      result.push(right.shift());
    }
  }
  //left에 가장 큰 수 하나만 남고 right는 0인 경우 left에 하나 남은 값을 result의 맨 끝에 넣어줌
  while (left.length) {
    result.push(left.shift());
  }

  //right에 가장 큰 수 하나만 남고 right는 0인 경우 left에 하나 남은 값을 result의 맨 끝에 넣어줌
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

// 문자열로 입력받은 배열의 각 요소들을 정수로 바꿔 새로운 배열 array 생성
const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

// array를 인수로 전달
console.log(mergeSort(array));
