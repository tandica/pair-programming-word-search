const transpose = function(matrix) {
  // Put your solution here
  let array = [];
  for (let j = 0; j < matrix[0].length; j++) {
      array.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         array[j][i] = matrix[i][j];
      }
  }
  return array;
};
module.exports = transpose;
 