const solution = (student) => {
  const visible = 1;
  let max = student[0];
  // 시간복잡도를 줄이기 위해 for문 한번만 사용하기
  for (let i = 1; i < student.length; i++) {
    if (student[i] > max) {
      visible++;
      max = student[i];
    }
  }
  return visible;
};
