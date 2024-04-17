/*
@ Notions
-  it's a string of four numbers each between 0 and 255 inclusive
- with a "." character in between each number
- All numbers should be present without leading zeros.
- 192.168.0.1 is a valid IPv4 address
- 280.100.92.101 is not a valid IPv4 address (larger than 255)
- 255.100.81.160.172 is not a valid IPv4 address (contains 5 integers)
*/

function solution(inputString) {
  const address = inputString.split(".");
  if (address.length !== 4) return false;
  return address.every((v) => {
    // empty value
    if (v === "") return false;
    // not in a range
    if (v < 0 || v > 255) return false;
    // leading zero
    if (v.length > 1 && v[0] === "0") return false;
    // not a number
    if (!Number(v) && v != 0) return false;
    return true;
  });
}
