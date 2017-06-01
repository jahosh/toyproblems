function spiralTraversal(matrix) {
  let top = 0;
  let b = matrix.length - 1;
  let l = 0;
  let r = matrix[0].length - 1;
  let dir = 0;
  let results = [];

  while (top <= b && l <= r) {
    if (dir === 0) {
      for (let j = l; j <= r; j++) {
        results.push(matrix[top][j]);
      }
      top++
      dir = 1;
    } else if (dir === 1) {
      for (let j = top; j <= b; j++) {
        results.push(matrix[j][r]);
      }
      r--;
      dir = 2
    } else if (dir === 2) {
      for (let j = r; j >= l; j--) {
        results.push(matrix[b][j]);
      }
      b--;
      dir = 3;
    } else if (dir === 3) {
      for (let j = b; j >= top; j--) {
        results.push(matrix[j][l]);
      }
      l++;
      dir = 0;
    }
  }
  return results;
}