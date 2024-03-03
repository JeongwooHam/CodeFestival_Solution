function solution(triangle) {
    const h = triangle.length;
    
    for(let level = h - 2; level >= 0; level--){
        for(let i = 0; i <= level; i++){
            triangle[level][i] += Math.max(triangle[level+1][i], triangle[level+1][i+1])
        }
    }
    
    return triangle[0][0]
}