/*
`20190923`을 출력합니다.  
아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/

/*
정규표현식 만들기
1) 정규 표현식 리터럴(바뀔 일이 없는 패턴)
    const re = /ab+c/
2) RegExp 객체의 생성자 호출 (바뀔 수 있는 패턴, 외부 출처에서 가져오는 패턴)
    const re = new RegExp('ab+c')

정규표현식 패턴 작성하기
1) 단순 패턴 사용하기
    /abc/ : 'abc'라는 문자의 조합이 나타나는 부분
2) 특수 문자 사용하기
    /ab*c/ : a 이후에 0개 이상의 b, 그 뒤의 c ( * : 이전 항목의 0번 이상 반복 )
    ...
3) 플래그를 활용한 고급 탐색
    const re = /pattern/flags;
    g: 전역 탐색
    i: 대소문자를 구분하지 않음
    m: 여러 줄에 걸쳐 탐ㅅㄱ
    ...
*/

/*
str.match(regexp): 문자열이 정규식과 매치되는 부분을 검색함

regexp: 정규식 개체

- 문자열이 정규식과 일치할 경우 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array 반환
- 일치하는 것이 없으면 null 반환
- 매개변수를 전달하지 않으면(match()) 빈 문자열이 있는 Array 반환
*/

// 2 0 1 9 0 9 2 3 번 반복
const user_s = "aacdddddddddfffffffffgghhh";
let result_s = "";

// 전역탐색, a ~ h 와 일치하는 것들을 배열로 만들어서 length로 길이 반환
// 일치하는 값이 없는 경우 null 반환 > Number 함수 사용하여 0으로 변환
console.log(
  `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
    user_s.match(/c/g).length
  }${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
    user_s.match(/f/g).length
  }${user_s.match(/g/g).length}${user_s.match(/h/g).length}`
);

console.log(Number(null));
