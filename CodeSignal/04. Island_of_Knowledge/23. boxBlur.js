/*
@ Box Blur Algorithm
- a spatial domain linear filter in which each pixel in the resulting image 
  has a value equal to the average value of its neighboring pixels in the input image. 
- a 3 by 3 box blur ("radius 1") can be written as matrix
- Due to its property of using equal weights, 
  it can be implemented using a much simpler accumulation algorithm, 
  which is significantly faster than using a sliding-window algorithm.
*/

function solution(image) {
  const row = image[0].length;
  const col = image.length;
  const boxes = Array.from({ length: col - 2 }, () =>
    Array.from({ length: row - 2 })
  );

  const sliceBox = (r, c) =>
    image.slice(c, c + 3).map((list) => list.slice(r, r + 3));
  const getAverage = (arr) =>
    Math.floor(arr.flat().reduce((sum, num) => sum + num) / 9);

  for (let i = 0; i < row - 2; i++) {
    for (let j = 0; j < col - 2; j++) {
      boxes[j][i] = getAverage(sliceBox(i, j));
    }
  }

  return boxes;
}
