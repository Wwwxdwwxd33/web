// 深度优先遍历 尽可能深的搜索树的分支

let tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

let dfs = (root) => {
  console.log(root.val);
  if (root.children && root.children.length > 0) {
    root.children.forEach(dfs);
  }
};
dfs(tree);
