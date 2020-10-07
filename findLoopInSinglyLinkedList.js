/**
 *
 * @param {Node} head
 * Time O(n)
 * Space O(1)
 *
 * F -> X = D + P
 * S -> 2X = 2D + 2P
 * T -> 2D + 2P - P = 2D + P
 * R -> T - (D - P) = 2D + P - (D - P) = D
 */
const solution = (head) => {
  let firstPointer = head;
  let secondPointer = head.next.next;
  while (firstPointer !== secondPointer) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next.next;
  }
  firstPointer = head;
  while (firstPointer != secondPointer) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return firstPointer;
};
