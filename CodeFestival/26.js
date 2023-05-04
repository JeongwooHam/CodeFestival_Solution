const planet = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const kor = prompt();

function eng(kor) {
  if (!planet[kor]) return "존재하는 행성이 아닙니다.";
  return planet[kor];
}

console.log(eng(kor));
