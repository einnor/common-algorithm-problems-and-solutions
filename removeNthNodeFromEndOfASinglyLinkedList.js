/**
 *
 * @param {SinglyLinkedList} head
 * @param {Number} n
 *
 * Time O(n)
 * Space O(1)
 */
const solution = (head, n) => {
  let counter = 1;
  let first = head;
  let second = head;
  while (counter <= n) {
    second = second.next;
    counter += 1;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
};
