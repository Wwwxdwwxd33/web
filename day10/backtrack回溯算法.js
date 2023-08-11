var permute = function(nums) {
  const res = []
  const backtrack = (path) => {
    if(path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach(n => {
      if(path.includes(n)) {return}
      backtrack(path.concat(n))
    })
  }
  backtrack([])
  return res
};

permute([1,2,3])


var subsets = function(nums) {
  let res = []
  let path = []
  function backtracking(startIndex) {
    res.push([...path])
    for(let i = startIndex;i<nums.length;i++) {
      path.push(nums[i])
      backtracking(i+1)
      path.pop()
    }
  }
  backtracking(0)
  return res
};

subsets([1,2,3])

