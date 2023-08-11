var rob = function(nums) {
  if(nums.length === 0) {return 0}
  const dp = [0,nums[0]]
  for(let i = 2;i<=nums.length;i++) {
    dp[i] = Math.max(dp[i-2] + nums[i-1],dp[i-1])
  }
  console.log(dp)
  return dp[nums.length-1]
};

rob([1,2,3,4,5])
