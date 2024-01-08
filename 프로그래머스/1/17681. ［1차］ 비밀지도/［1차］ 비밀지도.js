/*
@ 풀이 방법 생각하기
1. map으로 각 배열의 수를 이진수로 변환한다.
- toString을 사용하되 이진수의 길이가 n과 같아야 하므로 빈 앞 부분을 0으로 채워야 한다.
2. 길이가 n이고 #으로 채워진 배열 n개를 담은 결과 배열을 생성한다.
3. for문으로 arr1, arr2를 순회하며 이진수 값 중 하나라도 false가 되는 경우 공백(" ")으로 바꾼다.
4. map으로 각 배열을 문자열로 합친 결과 배열을 반환한다.
*/

// 이진수 변환 함수
const makeBinary = (len, num) => {
    let binary = num.toString(2)
    if(binary.length < len) binary = '0'.repeat(len - binary.length) + binary
    
    return binary
}

function solution(n, arr1, arr2) {
    const map1 = arr1.map((el) => makeBinary(n, el));
    const map2 = arr2.map((el) => makeBinary(n, el))
    const result = Array.from({length: n}, () => "#".repeat(n).split(""))
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            // 둘 다 공백일 때만 변경
            if(map1[i][j] === '0' && map2[i][j] === '0') result[i][j] = " "
        }
    }
    
    return result.map((el) => el.join(""))
}