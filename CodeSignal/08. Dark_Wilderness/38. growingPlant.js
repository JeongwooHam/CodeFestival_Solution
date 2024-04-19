function solution(upSpeed, downSpeed, desiredHeight) {
  let day = 0;
  let curHeight = 0;
  while (true) {
    day++;
    curHeight += upSpeed;
    if (curHeight >= desiredHeight) break;
    curHeight -= downSpeed;
  }
  return day;
}
