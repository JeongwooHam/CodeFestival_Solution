function solution(inputString) {
  const splitted = inputString.split("-");
  if (splitted.length !== 6) return false;
  for (let group of splitted) {
    if (!group) return false;
    if (group.length !== 2) return false;
    if (!/^[0-9A-F]*$/.test(group)) return false;
  }
  return true;
}
