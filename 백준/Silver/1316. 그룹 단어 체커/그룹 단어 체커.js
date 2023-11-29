const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const makeMap = (str) => {
  const wordMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (wordMap.has(str[i])) wordMap.set(str[i], wordMap.get(str[i]) + 1);
    else wordMap.set(str[i], 1);
  }

  return wordMap;
};

const isGroupWord = (strList) => {
  const result = Array.from({ length: strList.length }, () => true);

  for (let i = 0; i < strList.length; i++) {
    // map에 나온 순서대로, 정해긴 개수만큼 나오는지 -> 흐름 끊기면 바로 false
    const wordMap = makeMap(strList[i]);
    const targetWord = Array.from(wordMap)
      .map(([key, val]) => key.repeat(val))
      .join("");
    if (targetWord !== strList[i]) [result[i]] = [false];
  }

  return result.filter((v) => v).length;
};

console.log(isGroupWord(input.slice(1)));