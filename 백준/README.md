## Template

### <code>fs</code>

```js
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

// 내가 푼 코드

console.log();
```

- node.js 파일 시스템 모듈을 사용하는 방식이다.
- 모듈이기 때문에 <code>require</code>로 불러온다.

![Alt text](image.png)

- 런타임 에러로 인해 이 방식 대신 <code>readline</code>을 사용하는 것이 권장된다.

### <code>readline</code>

```js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
  })
  .on("close", function () {
    // 내가 푼 코드
    process.exit();
  });
```

- 첫 번째 입력값으로 개수가 와서 삭제해줘야 하는 경우

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const len = input.shift();

// 이 상태로 input 값을 사용하면 된다.
```

```
🥸 readline 사용이 권장되나 보통 fs 모듈을 사용해도 에러가 나지 않는 경우가 많으므로 골라서 사용하면 될 것 같다.
```

### ⚠️ <code>console.log</code> 사용 시 주의할 점

- 입력 값의 개수가 <code>N(1 ≤ N ≤ 1,000,000)</code>처럼 큰 경우 for문을 사용하여 <code>console.log</code>로 값을 하나씩 찍으면 **시간 초과** 오류가 발생한다.

- 이때는 아래와 같이 값을 출력하면 된다.

```js
console.log(result.join("\n"));
```
