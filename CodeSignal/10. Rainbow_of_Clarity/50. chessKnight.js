function solution(cell) {
  const move = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  let cnt = 0;
  const [x, y] = cell.split("");
  for (let [mx, my] of move) {
    if (x.charCodeAt(0) + mx < 97 || x.charCodeAt(0) + mx > 104) continue;
    if (Number(y) + my < 1 || Number(y) + my > 8) continue;
    cnt++;
  }
  return cnt;
}
