// 풀이 방법: boolean 배열 만들고 나중에 true인 값의 index + 1 출력하기

const func = () => {
  // 길이가 10000인 배열 생성하기
  const arr = Array.from({ length: 10000 }, () => true);

  const makeSelfNum = (target, i) =>
    i + target.reduce((sum, num) => sum + num * 1, 0);

  for (let i = 1; i <= arr.length; i++) {
    let target = (i + "").split("");
    let len = target.length;
    // n자리 수라면
    if (len === 1) {
      // 홀수일 때
      [arr[i + i - 1]] = [false];
      if (!(i % 2)) [arr[i - 1]] = [false];
    } else {
      while (target.length <= 4) {
        target = (i + "").split("");
        target = makeSelfNum(target, i);
        [arr[target - 1]] = [false];
      }
    }
    // 10001이면 출력 X이므로 10000은 필요 없음
  }
    
  // 배열 수정하기
  const result = arr.map((v, i) => (v ? i + 1 : v)).filter((v) => v);

  for(let i = 0; i < result.length; i++){
      console.log(result[i])
  }

};

func();
