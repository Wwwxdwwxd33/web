// 中序遍历  对根节点的左子树进行中序遍历，访问根节点，对根节点的右子树进行中序遍历 左根右
const bt = require("../03,二叉树bt");

// 递归
// const inorder = (root) => {
//   if (root) {
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
//   }
// };

const inorder = (root) => {
  if (!root) {
    return;
  }
  let stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};
inorder(bt);
