function solution(inputString) {
  return [...inputString]
    .map((w) => {
      if (w === "z") return "a";
      return String.fromCharCode(w.charCodeAt(0) + 1);
    })
    .join("");
}
