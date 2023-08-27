/*
[문자열 압축]
알파벳 대문자로 이루어진 문자열을 입력받아 
같은 문자가 연속으로 반복되는 경우 
반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 
문자열을 압축하는 프로그램을 작성하시오. 
단 반복횟수가 1인 경우 생략합니다.
*/

// 직접 푼 풀이
const solution = (str) => {
  let answer = "";
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else if (str[i] !== str[i + 1] && str[i] === str[i - 1]) {
      cnt++;
      answer += str[i - 1] + cnt + "";
    } else {
      answer += str[i] + "";
      cnt = 0;
    }
  }

  return answer;
};
console.log(solution("KKHSSSSSSSE"));

const answer = (str) => {
  let answer = "";
  // cnt를 1로 초기화했음
  let cnt = 1;
  // 마지막 문자까지 검사할 수 있도록 빈 문자 추가
  str = str + " ";

  // 빈 문자까지 검사하지 않게 -1 빼주기
  for (let i = 0; i < str.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      // cnt가 1보다 클 때만 answer에 더해지도록 하였음
      // 이를 통해 위의 solution 함수보다 가독성 증가!
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
};
