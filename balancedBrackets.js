const isBalanced = (str) => {
  if (!str) {
    return null;
  }
  const stack = [];
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")"
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (pairs[char]) {
      stack.push(char);
    } else if (char === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    }
  }

  return stack.length === 0;
}