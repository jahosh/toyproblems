function reverseInteger(n) {
  let reversedInt = 0;

  while (n !== 0) {
    reversedInt = reversedInt * 10;
    reversedInt = reversedInt + (n % 10);
    n = Math.floor(n / 10);
  }
  
  return reversedInt;
}