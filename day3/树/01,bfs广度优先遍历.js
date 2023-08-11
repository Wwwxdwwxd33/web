// 广度优先遍历 先访问离根节点最近的分支
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

const bfs = (root) => {
  let q = [root]
  console.log(q);
  while(q.length > 0) {
    const n = q.shift()
    console.log(n.val);
    n.children.forEach(child => {
      q.push(child)
    });
  }
}

bfs(tree)