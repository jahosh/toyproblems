const reverseLinkedList = head => {
  let current = head;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}