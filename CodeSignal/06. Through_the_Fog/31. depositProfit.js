function solution(deposit, rate, threshold) {
  let year = 0;
  while (deposit < threshold) {
    year++;
    deposit += deposit * rate * 0.01;
  }
  return year;
}
