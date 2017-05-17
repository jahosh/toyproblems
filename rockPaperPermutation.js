const rockPaperPermutation = roundCount => {
  if (!roundCount) {
    return [];
  }
  
  const moves = ["r", "p", "s"];
  const permutations = [];
  
  function findPermutation(str="") {
    if (str.length === roundCount) {
      permutations.push(str);
      return;
    }

    for (let i = 0; i < moves.length; i++) {
      findPermutation(str + moves[i]);
    }
  }
  findPermutation();
  return permutations;
}