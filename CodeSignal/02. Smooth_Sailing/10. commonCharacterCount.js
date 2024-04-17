const solution = (s1, s2) => {
  let cnt = 0;
  s1 = [...s1];
  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i])) {
      cnt++;
      const idx = s1.findIndex((str) => str === s2[i]);
      s1.splice(idx, 1);
    }
  }
  return cnt;
};
