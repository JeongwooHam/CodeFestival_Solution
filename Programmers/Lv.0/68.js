/*
[홀수 vs 짝수]
정수 리스트 num_list가 주어집니다. 
가장 첫 번째 원소를 1번 원소라고 할 때, 
홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 
두 값이 같을 경우 그 값을 return합니다.
*/

function solution(num_list) {
  const odd = [];
  const even = [];
  num_list.forEach((el, i) => {
    if (i % 2) {
      odd.push(el);
    } else {
      even.push(el);
    }
  });
  const oddSum = odd.reduce((sum, num) => sum + num);
  const evenSum = even.reduce((sum, num) => sum + num);
  return oddSum > evenSum ? oddSum : evenSum;
}
console.log(solution([4, 2, 6, 1, 7, 6]));

// map 돌릴 때에도 삼항 연산자 사용
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}
