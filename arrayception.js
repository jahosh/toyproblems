function arrayception(array) {

  let maxDepth = 0;

  function recurse(arr, currentDepth) {
    if (!Array.isArray(arr)) {
      maxDepth = Math.max(maxDepth, currentDepth);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      recurse(arr[i], currentDepth + 1);
    }

  }

  recurse(array, 0);
  return maxDepth;
}