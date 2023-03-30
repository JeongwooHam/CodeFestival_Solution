let year = "2019";

let month = "04";

let day = "26";

let hour = "11";

let minute = "34";

let second = "27";

// join으로 합친 뒤 concat
let arr1 = [year, month, day];
arr1 = arr1.join("/");

let arr2 = [hour, minute, second];
arr2 = arr2.join(":");

let result1 = arr1.concat(" ", arr2);

// 개별적으로 하나씩 concat
let result2 = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);

console.log(result1);
console.log(result2);
