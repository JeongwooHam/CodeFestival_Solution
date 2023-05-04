/*
행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 
곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

입력
a = [[1, 2], [2, 4]]

b = [[1, 0], [0, 3]]

       1 0 
       0 3 
       ㅡㅡ
1 2 |  1 6
2 4 |  2 12

출력
[[1, 6], [2, 12]]
[[a[0][0]*b[0][0]+a[0][1]*b[1][0], a[0][0]*b[0][1]+a[0][1]*b[1][1]], 
[a[1][0]*b[0][0]+a[1][1]*b[1][0], a[1][0]*b[0][1]+a[1][1]*b[1][1]]]


입력
a = [[1, 2, 3], [2, 4, 2], [1, 1, 1]]
b = [[1, 0, 2], [0, 3, 4], [1, 1, 2]]

        1 0 2
        0 3 4
        1 1 2
        ㅡㅡㅡ
1 2 3 | 4 9 16
2 4 2 | 4 14 24
1 1 1 | 2 4 8

출력
[[4, 9, 16], [4, 14, 24], [2, 4, 8]]

곱할 수 있는 행렬: a의 각 요소의 길이가 같고, 그 길이가 b의 요소의 개수와 같아야 함

출력
[[1, 6], [2, 12]]
*/

const resultArr = [];

function matrixMultilication(arr1, arr2) {
  const idx1 = arr1[0].length;
  const idx2 = arr2[0].length;

  // answer에서는 -1이 아닌 경우를 if문 안에 넣고, 아닌 경우 모두 -1을 return하도록 했음

  // a의 요소의 길이와 b의 요소의 개수가 같지 않다면
  if (!(idx1 === arr2.length)) return -1;

  // 곱할 수 있는 행렬인 경우

  //   for (let i in arr2) {
  //     for (let j in arr1) {
  //       console.log("i: ", i);
  //       console.log("j: ", j);
  //     }
  //   }
  //   return resultArr;

  // answer
  if (idx1 === b.length) {
    // a의 요소의 길이만큼
    for (let i = 0; i < idx1; i++) {
      let row = [];
      // a의 요소의 길이만큼
      for (let j = 0; j < idx1; j++) {
        let x = 0;
        // a의 요소의 길이만큼
        for (let k = 0; k < idx1; k++) {
          // 곱셈 결과 나오는 행렬의 크기: (앞 행렬의 행의 수) X (뒤 행렬의 열의 수)
          // i * k, k * j
          // k = 앞 행렬의 행의 수 = 뒤 행렬의 열의 수
          // i = 앞 행렬의 열의 수
          // j = 뒤 행렬의 행의 수
          x += a[i][k] * b[k][j];
        }
        row.push(x);
      }
      resultArr.push(row);
    }
    return resultArr;
  }
}

const a = [
  [1, 2],
  [2, 4],
];
const b = [
  [1, 0],
  [0, 3],
];

console.log(matrixMultilication(a, b));
