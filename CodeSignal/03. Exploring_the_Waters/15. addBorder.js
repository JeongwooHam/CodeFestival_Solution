function solution(picture) {
  const len = picture[0].length;
  const b = "*".repeat(len);
  picture.push(b);
  picture.unshift(b);
  return picture.map((ch) => {
    const arr = [...ch];
    arr.push("*");
    arr.unshift("*");
    return arr.join("");
  });
}
