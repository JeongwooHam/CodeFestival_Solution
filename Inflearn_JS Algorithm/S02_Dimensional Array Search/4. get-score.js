const getScore = (score) => {
  let result = 0,
    correct = 0;

  for (let num of score) {
    if (num === 1) {
      correct++; // correct에 먼저 더해줘야 함
      result += correct;
    } else correct = 0;
  }

  return result;
};

console.log(getScore([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
