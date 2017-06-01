function sortedInsert(stack, element) {
  if (stack.isEmpty()) {
    stack.push(element);
    return stack;
  }

  if (element < stack.peek()) {
    stack.push(element);
    return stack;
  };

  const storage = new Stack();

  while (element > stack.peek()) {
    const val = stack.pop();
    storage.push(val);
    if (element < stack.peek() || !stack.peek()) {
      stack.push(element);
    }
  }
  while (!storage.isEmpty()) {
    stack.push(storage.pop());
  }

  return stack;
}