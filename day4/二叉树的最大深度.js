var maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) {
      return;
    }
    if (!n.left && !n.right) {
      res = Math.max(res, l);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);
  return res;
};

const dt = {
  val: "1",
  left: {
    val: "2",
    left: {
      val: "4",
      left: null,
      right: null,
    },
    right: {
      val: "5",
      left: null,
      right: null,
    },
  },
  right: {
    val: "3",
    left: {
      val: "6",
      left: null,
      right: null,
    },
    right: {
      val: "7",
      left: null,
      right: null,
    },
  },
};
maxDepth(dt);
