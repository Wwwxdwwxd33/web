var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  // 新建一个空链表存放相加后的链表
  let p3 = l3;
  let carry = 0; //存大于10的和的个位数
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const val = v1 + v2 + carry;
    carry = Math.floor(val / 10); //对数值向下 获取>10的val的十位数
    p3.next = new ListNode(val % 10); //取val的余数，获取>10的val的个位数
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }
  // 当p1或p2已经遍历完 但是最后两数相加> 10
  //  就将十位数放入下一位
  if (carry) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
