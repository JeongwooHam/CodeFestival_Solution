const arr = prompt().split(" ");
const num1 = parseInt(arr[0], 10);
const num2 = parseInt(arr[1], 10);

const 몫 = Math.trunc(num2 / num1);
const 나머지 = num2 % num1;

console.log(몫, 나머지);
