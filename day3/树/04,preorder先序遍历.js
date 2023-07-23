// 先序遍历 先访问根节点，对左子树进行先序遍历，再对右子树进行先序遍历  根左右

const bt = require("../03,二叉树bt");

// 递归
// const preorder = (root) => {
//   if (root) {
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
//   }
// };

// 非递归
const preorder = (root) => {
  if (!root) {
    return;
  }
  let stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

preorder(bt);
