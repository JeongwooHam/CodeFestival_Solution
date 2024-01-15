/*
@ 풀이 방법 고민해보기
1. 배열의 각 수를 문자열로 만든 뒤 split한다.
2. 각 수 배열의 0번째 값이 큰 순서대로 정렬한다.
3. 0번째 값이 같다면 합쳤을 때 결과가 더 큰 순서대로 정렬한다.
4. 순서대로 합친 결과값을 반환한다.
*/

function solution(numbers) {
    const arr = numbers.map((number) => (number + "").split(""));
    arr.sort((a, b) => {
        if(a[0] === b[0]){
            return (b.join("") + a.join("")) - (a.join("") + b.join(""))
        }
        return  b[0] - a[0]
    })
    
    const result = arr.map((arr) => arr.join("")).join("")
    if(Number(result) === 0) return "0"
    return result
}