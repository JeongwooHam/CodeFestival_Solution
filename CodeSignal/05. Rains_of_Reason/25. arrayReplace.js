function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((el) => (el === elemToReplace ? substitutionElem : el));
}
