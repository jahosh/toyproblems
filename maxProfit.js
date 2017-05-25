const maxProfit = (prices) => {
  if (prices.length < 2) {
    throw new Error('requires atleast two prices');
  }

  let min = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - min;
    maxProfit = Math.max(profit, maxProfit);
    min = Math.min(prices[i], min);
  }

  return maxProfit;
}