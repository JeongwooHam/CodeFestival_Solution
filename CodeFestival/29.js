let str = prompt();

if (str.charCodeAt(0) < 97) {
  console.log("YES");
} else {
  console.log("NO");
}

// answer: str === str.toUpperCase()
