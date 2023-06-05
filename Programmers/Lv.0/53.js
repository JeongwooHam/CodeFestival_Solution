function solution(my_string, is_prefix) {
  const strArray = [...my_string];
  const arr = [];
  for (let i = 1; i <= strArray.length; i++) {
    arr.push(strArray.slice(0, i).join(""));
  }
  console.log(arr);
  return arr.some((el) => el === is_prefix) ? 1 : 0;
}

console.log(solution("banana", "bana"));

// 간단하게 is_prefix의 길이를 활용하여 푸는 방법!

function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}
