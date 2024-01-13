let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, K] = input[0].split(" ").map(Number);
const w_arr = [];
const v_arr = [];

for (let i = 1; i < input.length; i++) {
  const [w, v] = input[i].split(" ").map(Number);
  w_arr.push(w);
  v_arr.push(v);
}

const makeBasicArray = (len) => Array.from({ length: len }, () => 0);

const knapsack = (N, K, w_arr, v_arr) => {
  const dy = makeBasicArray(N + 1).map(() => makeBasicArray(K + 1));

  for (let i = 1; i <= N; i++) {
    const tw = w_arr[i - 1];
    const tv = v_arr[i - 1];

    for (let j = 1; j <= K; j++) {
      if (j - tw >= 0) {
        dy[i][j] = Math.max(dy[i - 1][j], dy[i - 1][j - tw] + tv);
      } else {
        dy[i][j] = dy[i - 1][j];
      }
    }
  }

  return dy[N][K];
};

console.log(knapsack(N, K, w_arr, v_arr));