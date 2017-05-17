const climbStairs = n => {
  if (!n) {
    return 0;
  }

  const cache = [0, 1, 2];

  for (let i = cache.length; i <= n; i++) {
    cache[i] = cache[i-1] + cache[i-2];
  }
  
  return cache[n];
}