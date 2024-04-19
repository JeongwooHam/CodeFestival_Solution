// the difference between x and y should be same
function solution(bishop, pawn) {
  return (
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) ===
    Math.abs(bishop[1] - pawn[1])
  );
}
