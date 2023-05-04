/*
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
*/

// 2 1 3 4 5

function bubble(arr) {
  let result = arr.slice();
  let num;

  /*
    i   0   1   2   3
    j   1   2   3   4
        2   3   4   
        3   4   
        4  
    */

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] - result[i] < 0) {
        num = result[j];
        result[j] = result[i];
        result[i] = num;
      }
    }
  }
  return result;

  /* answer
  i     j
  0     0 1 2 3 4
  1     0 1 2 3
  2     0 1 2
  3     0 1
  4     0

  i를 직접 사용하는 것이 아니라 i로는 반복 횟수만 정해주고 j만 사용하여 비교하였음 (j, j+1)
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  return result;
}

  */
}

const items = "2 4 1 5 6".split(" ").map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
