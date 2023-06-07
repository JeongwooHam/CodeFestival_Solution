/*
[마지막 두 원소]
정수 리스트 num_list가 주어질 때, 
마지막 원소가 그 전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 
마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 
solution 함수를 완성해주세요.
*/

function solution(num_list) {
  const last = num_list[num_list.length - 1];
  const beforeLast = num_list[num_list.length - 2];
  num_list.push(last > beforeLast ? last - beforeLast : last * 2);
  return num_list;
}

// 객체 분해 할당 사용해서 더 깔끔하게 푸는 방법
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
