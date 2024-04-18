function solution(name) {
  return /^[a-zA-Z0-9_]*$/.test(name) && Number.isNaN(Number(name[0]));
}
