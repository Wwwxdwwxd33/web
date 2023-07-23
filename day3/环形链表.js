var hasCycle = function (head) {
  let p1 = head;
  let p2 = head;
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    console.log(p1, p2);
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};
hasCycle([3, 2, 0, -4]);
