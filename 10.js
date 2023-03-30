/* 별찍기
                    i             
_ _ _ _ *           0   공백: 4 (4-0),  별: 1 (2*0+1)
_ _ _ * * *         1   공백: 3 (4-1),  별: 3 (2*1+1)
_ _ * * * * *       2   공백: 2 (4-2),  별: 5 (2*2+1)
_ * * * * * * *     3   공백: 1 (4-3),  별: 7 (2*3+1)
* * * * * * * * *   4   공백: 0 (4-4),  별: 9 (2*4+1)
*/

function star(num) {
  for (let i = 0; i < num; i++) {
    let spaceArr = "";
    let starArr = "";
    for (let j = num - 1 - i; j >= 0; j--) {
      spaceArr += " ";
    }
    for (let j = 2 * i + 1; j > 0; j--) {
      starArr += "*";
    }
    console.log(spaceArr.concat(starArr));
  }
}

star(5);

star(10);
