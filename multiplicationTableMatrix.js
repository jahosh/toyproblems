function multiplicationMatrix(factors) {
  const matrix = [];

  for (let i = 0; i < factors.length; i++) {
    const results = [];
    for (let j = 0; j < factors.length; j++) {
      results.push(factors[i] * factors[j]);
    }
    matrix.push(results);
  }
  
  return matrix;
}