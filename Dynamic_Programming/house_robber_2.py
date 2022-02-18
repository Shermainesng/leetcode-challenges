class Solution:
    def rob(self, nums: List[int]) -> int:
        return max(nums[0], self.helper(nums[1:]), self.helper(nums[:-1]))

    def helper(self, nums):
        a, b, maxAmt = 0,0,0

        for n in nums:
            a = n + b
            b = maxAmt
            maxAmt = max(a, b)
        return maxAmt
