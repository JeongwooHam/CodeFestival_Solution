let str = prompt().split("");

for (let i = 0; i < str.length; i++) {
  str[i] = parseInt(str[i]);
}

console.log(str.reverse());
console.log(typeof str.reverse()[0]); // 결과값이 number

// answer: 결과값이 string
let data = "1 2 3 4 5".split(" ").reverse();
let result = "";

for (let i = 0; i < data.length; i++) {
  result += data[i];
}

console.log(result);
console.log(typeof result);
