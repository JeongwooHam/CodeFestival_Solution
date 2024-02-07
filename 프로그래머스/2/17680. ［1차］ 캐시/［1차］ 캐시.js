function solution(cacheSize, cities) {
   let result = 0;
   let cache = [];
    
   if(cacheSize === 0) return cities.length * 5
    
   for(let i = 0; i < cities.length; i++){
       const value = cities[i].toLowerCase()
       if(cache.includes(value)){
           // cache hit
           result += 1
           cache = cache.filter((el) => el !== value)
           cache.unshift(value)
       }else{
           // cache miss
           result += 5
           // 캐시가 가득 찬 경우
           if(cache.length === cacheSize) cache.pop()
           cache.unshift(value)
       }
   }
   return result
}