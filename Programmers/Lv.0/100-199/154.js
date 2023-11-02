/*
[날짜 비교하기]
정수 배열 date1과 date2가 주어집니다. 
두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 
각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.
*/

const my_solution = (date1, date2) => {
  const [y1, m1, d1] = date1;
  const [y2, m2, d2] = date2;

  if (y1 > y2) return 0;

  if (y1 === y2 && m1 > m2) return 0;

  if (y1 === y2 && m1 === m2 && d1 > d2) return 0;

  if (y1 === y2 && m1 === m2 && d1 === d2) return 0;

  return 1;
};

// @ solution -> Date 객체를 활용하는 방법이 있었다..!🥲
const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
