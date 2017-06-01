const map = {
  0: ["0"],
  1: ["1"],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "N"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
}

function telephoneWords(digitString) {
  const results = [];
  const arr = map[digitString[0]];
  function recurse(buildArr, idx = 1) {
    if (buildArr.length === digitString.length) {
      results.push(buildArr.join(""));
      return;
    }
    const next = map[digitString[idx]];
    for (let i = 0; i < next.length; i++) {
      recurse(buildArr.concat(next[i]), idx + 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    recurse([arr[i]])
  }
  return results;
}