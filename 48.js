/*
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

[input]
AAABBBcccddd
[output]
aaabbbCCCDDD
*/

const defaultStr = "AAABBBcccddd";
let result = "";

// str[0] = str.toLowerCase는 불가능하다. 한번 생성되면 원본 문자열 변경은 불가능하기 때문에 새로운 문자열을 만들어주어야 한다.
function changeWord(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) <= 90) {
      //   console.log(str[i]);
      //   console.log(str[i].toLowerCase());
      result = result + str[i].toLowerCase();
      //   console.log(result);
    }
    if (str.charCodeAt(i) >= 97) {
      //   console.log(str[i]);
      //   console.log(str[i].toUpperCase());
      result = result + str[i].toUpperCase();
      //   console.log(result);
    }
  }
  return result;
}

console.log(changeWord(defaultStr));

// for(word in str) > replace(str[word], str[word].to___Case)를 사용하는 경우 지정된 인덱스에 해당하는 단어와 같은 문자들을 문자열에서 찾아 첫번째 문자를 바꾸는 것을 반복하게 되어 정확한 값이 나오지 않음.

// answer
let a = prompt("문자열을 입력하세요.");
let b = [];
let s = "";

// 아스키코드 사용하지 않고 풀었음
for (let i = 0; i < a.length; i++) {
  //toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
  if (a[i] === a[i].toLowerCase()) {
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j = 0; j < b.length; j++) {
  s += b[j];
}

console.log(s);
