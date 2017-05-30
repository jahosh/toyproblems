function coinSums(total) {
  let count = 0;

  function recurse(change, lastCoin) {
    if (change === total) {
      count++;
      return;
    }
    if (change > total) {
      return;
    }
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] >= lastCoin) {
        recurse(change + coins[i], coins[i]);
      }
    }
  };

  recurse(0, 0);
  return count;
}