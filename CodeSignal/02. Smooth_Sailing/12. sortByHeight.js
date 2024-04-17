function solution(a) {
  const people = a.filter((len) => len !== -1).sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = people[0];
      people.shift();
    }
  }
  return a;
}
