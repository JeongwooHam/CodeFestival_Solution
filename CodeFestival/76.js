/*
[안전한 땅]
전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고 한다. 
그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된 지뢰가 아직도 많이 남아 있다는 것이 판명되었다. 
정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.

수색반은 가장 효율적인 지뢰 제거가 하고 싶다. 
수색반은 도시를 격자무늬로 나눠놓고 
자신들이 수색할 수 있는 범위 내에 가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.

가장 먼저 테스트 케이스의 수를 나타내는 1이상 100 이하의 자연수가 주어진다.
각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색 가능한 범위 b가 주어진다. 
(a와 b 모두 정사각형의 가로 또는 세로를 나타낸다. 예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)

그 후 a 줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다. 
0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.

각 테스트 케이스에 대해 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.

입력
1               >> 테스트 케이스의 수
5 3             >> 수색할 도시의 크기(a*a) / 수색반이 한 번에 수색 가능한 범위(b*b)

1 0 0 1 0       도시 내 지뢰가 있는지 여부 (a줄)
0 1 0 0 1
0 0 0 1 0
0 0 0 0 0
0 0 1 0 0

출력
3
*/

// 원래 문제는 prompt에서 입력값을 받아오는 것을 전제로 하므로 문자열을 parseInt

const testCase = parseInt("1", 10);
const inputArr = "5 3".split(" ");
const sizeOfCity = parseInt(inputArr[0], 10);
const searchArea = parseInt(inputArr[1], 10);

// console.log(testCase, sizeOfCity, searchArea);

let bombs = [
  ["1 0 0 1 0"],
  ["0 1 0 0 1"],
  ["0 0 0 1 0"],
  ["0 0 0 0 0"],
  ["0 0 1 0 0"],
];

const bombsArr = [];

for (let arr of bombs) {
  bombsArr.push(arr[0].split(" ").map((el) => parseInt(el)));
}

// console.log(bombsArr);

/*
a*a 내에서 b*b로 수색한 결과 찾을 수 있는 가장 큰 지뢰의 개수

가로 (0-2)(1-3)(2-4)
세로 (0-2)(1-3)(2-4)

세로 기준으로 가로로 움직이며 해당 구역에 1이 몇 개 있는지 찾아주어야 함
지뢰 여부를 각 줄을 하나의 요소로 해서 하나의 배열 bombArr에 담아주기
for문을 사용하여 bombArr의 0, 1, 2 - 번째 요소의 0, 1, 2 요소 중 1의 개수 찾아주기
1. 외부 for문은 0부터 시작해서 (sizeOfCity-searchArea)까지 가는 i (세로)
2. 내부 for문은 0부터 시작해서 (sizeOfCity-searchArea)까지 가는 j > i에 더해줄 값: 세로(i번째 요소)의 가로(j번째 요소)
3. 두 가지 방법으로 최댓값을 찾을 수 있음
    1) 각 수행에서 찾은 1의 개수를 resultArr에 계속 push 해주고 마지막에 Math.max() 사용해서 최댓값 출력
    2) 기준이 되는 변수 standard를 0으로 설정한 후, standard보다 해당 수행에서 찾은 값이 크면 그 값으로 standard를 바꿔줌. 마지막에 남은 standard를 출력
*/

let count = 0;

/*
 [
  ["1 0 0 1 0"],
  ["0 1 0 0 1"],
  ["0 0 0 1 0"],
  ["0 0 0 0 0"],
  ["0 0 1 0 0"],
]

i: 0 
j: 0        1       2
k: 0 1 2    0 1 2   0 1 2

0 1 2                           i + j
0 1 2 / 1 2 3 / 2 3 4           i + j + k
------------------------------
i: 1 
j: 0        1       2
k: 0 1 2    0 1 2   0 1 2

1 2 3
0 1 2 / 1 2 3 / 2 3 4
------------------------------
i: 2
j: 0        1       2
k: 0 1 2    0 1 2   0 1 2

2 3 4
0 1 2 / 1 2 3 / 2 3 4
*/

let newArr = [];
let targetArr = [];
let result = 0;

/*
i 0                                                                       1                                                                       2
j 0                       1                       2                       0                       1                       2                       0                       1                       2
k 0       1       2       0       1       2       0       1       2       0       1       2       0       1       2       0       1       2       0       1       2       0       1       2       0       1       2
x 0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   0 1 2   
*/

for (let i = 0; i <= sizeOfCity - targetArr; i++) {
  for (let j = 0; j <= sizeOfCity - targetArr; j++) {
    for (let k = 0; k <= sizeOfCity - targetArr; k++) {
      for (let x = 0; x <= sizeOfCity - targetArr; x++) {
        console.log(x);
        console.log("=============");
      }
      console.log("=============");
    }
    console.log("=============");
  }
  console.log("=============");
}

// console.log(bombsArr);
// console.log(newArr);
