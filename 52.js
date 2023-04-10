/*
    [퀵 정렬]
    1. 리스트 안의 한 요소를 피벗(pivot)으로 선택한다.
    2. 피벗을 기준으로
       - 피벗보다 작은 요소들은 모두 피벗의 왼쪽으로 옮긴다.
       - 피벗보다 큰 요소들은 모두 피벗의 오른쪽으로 옮긴다.
    3. 피벗을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.
        - 순환 호출을 이용하여 정렬 반복
        - 부분 리스트에 대해서도 다시 피벗을 정하고 피벗을 기준으로 2개의 부분 리스트로 나누는 과정을 반복한다.      
*/

function quickSort(arr) {
  // 부분 리스트의 길이가 1 이하일 경우 arr을 반환한다.
  if (arr.length <= 1) {
    return arr;
  }

  // pivot은 부분 배열의 가장 첫번째 값으로 한다.
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // array.concat(array) 뿐만 아니라
  // array.concat(string, array, ...)도 가능함
  return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

/*
    quickSort(array) > pivot: 5, left: [0, 4, 3, 2], right: [9, 11, 7, 8]
        - quickSort(left) > pivot: 0, left: [], right: [4, 3, 2]
            - quickSort(left) > []
            - quickSort(right) > pivot: 4, left: [3, 2], right: []
                - quickSort(left) > pivot: 3, left: [2], right: []
                    - quickSort(left) > [2]
                    - quickSort(right) > []
                    >> left + pivot + right: [2]
                - quickSort(right) > []
                >> left + pivot + right: [2,3]
            >> left + pivot + right: [2,3,4]
        >> left + pivot + right: [0,2,3,4]
        - quickSort(right) > pivot: 9, left: [7, 8], right: [11]
            - quickSort(left) > pivot: 7, left: [8], right: []
                - quickSort(left) > [8]
                - quickSort(right) > []
                >> left + pivot + right: [8]
            >> left + pivot + right: [7,8]
            - quickSort(right) > [11]
        >> left + pivot + right: [7,8,9,11]
    >> left + pivot + right: [0,2,3,4,7,8,9,11]

*/

console.log(quickSort(array));
