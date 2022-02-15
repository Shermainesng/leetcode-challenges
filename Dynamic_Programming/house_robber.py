class Solution:
    def rob(self, nums: List[int]) -> int:

        a, b, maxamt = 0, 0, 0

        for n in nums:
            a = n + b
            b = maxamt
            maxamt = max(a, b)
        return maxamt
