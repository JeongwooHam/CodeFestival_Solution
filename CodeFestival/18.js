let score = prompt().split(" ");

console.log(score);

score = score.map((score) => parseInt(score));

let sum = score.reduce((sum, n) => sum + n);

console.log(sum);

let ave = Math.trunc(sum / score.length);

console.log(ave);

/* for(let i=0; i<score.length; i++){
    sum += parseInt(score[i], 10); >> 10진수의 형태로 데이터 타입 변환
} */
