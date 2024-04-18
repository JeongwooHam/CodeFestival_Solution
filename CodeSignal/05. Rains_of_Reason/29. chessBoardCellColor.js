/*
- alphabet: a, c, e, ... (odd) / b, d, f, ... (even)
- even + even / odd + odd > dark board (ascii + number > even)
- even + odd / odd + even > light board (ascii + number > odd)
*/

function solution(cell1, cell2) {
  const [ch_1, n_1] = cell1.split("");
  const [ch_2, n_2] = cell2.split("");

  const getColor = (ch, n) => (Number(ch.charCodeAt(0)) + Number(n)) % 2;

  return getColor(ch_1, n_1) === getColor(ch_2, n_2);
}
