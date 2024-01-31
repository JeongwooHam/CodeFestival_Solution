/*
@ 풀이 방법 생각하기
- 순열(순서가 다르면 다른 것으로 구분)
- 중복되는 원소가 없는 튜플들 구하기

1. {, } 모두 삭제
2. , 기준으로 split
3. set 사용하여 원소 추출 
*/

function solution(s) {
   s = s.replaceAll("{", "[").replaceAll("}", "]")
   s = s.slice(2)
   s = s.slice(0, s.length-2)
   s = s.split("],[")
   const arr = s.sort((a, b) => a.length - b.length).map((el) => el.split(",").map((n) => Number(n)))
   const result = new Set();
   for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
           result.add(arr[i][j])
       }
   }
   return [...result]
}