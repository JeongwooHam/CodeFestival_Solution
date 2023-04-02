// const students = prompt().split(" ");

// const score = prompt().split(" ");
// score[0] = parseInt(score[0]);
// score[1] = parseInt(score[1]);

// console.log(students);
// console.log(score);

// const myMap = new Map([
//   [students[0], score[0]],
//   [students[1], score[1]],
// ]);

// console.log(myMap);

// answer

let keys = prompt().split(" ");
let values = prompt().split(" ");

let obj = {};

for (let i = 0; i < 2; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);
