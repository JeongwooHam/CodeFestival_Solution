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