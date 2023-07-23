// 中序遍历  对根节点的左子树进行中序遍历，对根节点的右子树进行中序遍历，访问根节点  左右根
const bt = require("../03,二叉树bt");

// 递归
// const postorder = (root) => {
//   if (root) {
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.val);
//   }
// };

// 非递归 把遍历顺序反一遍 然后倒转输出
const postorder = (root) => {
  if (root) {
    const outputStack = [];
    const stack = [root];
    while (stack.length) {
      const n = stack.pop();
      outputStack.push(n);
      if (n.left) stack.push(n.left);
      if (n.right) stack.push(n.right);
    }
    while (outputStack.length) {
      const n = outputStack.pop();
      console.log(n.val);
    }
  }
};
postorder(bt);
