// ⚠️
const solution = (s) => {
  while (true) {
    let close = s.indexOf(")");

    if (close < 0) break;

    let open = s.slice(0, close).lastIndexOf("(");

    let start = s.substring(0, open);
    let mid = s
      .substring(open + 1, close)
      .split("")
      .reverse("")
      .join("");
    let end = s.substring(close + 1);

    s = start + mid + end;
  }
  return s;
};
