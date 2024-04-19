const solution = (st) => {
  const reverse = (w) => w.split("").reverse().join("");
  const isPalindrome = (w) => w === reverse(w);
  if (isPalindrome(st)) return st;
  for (let i = 1; i < st.length; i++) {
    const slice = st.slice(0, i);
    const newStr = st + reverse(slice);
    if (isPalindrome(newStr)) return newStr;
  }
};
