class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1) #if amount is 7, dp = [8,8,8,8,8,8,8,8]
        dp[0] = 0

        for n in range(1, amount+1): #from 1 - 7 (does not include upper limit)
            for c in coins:
                if n >= c:
                    dp[n] = min(dp[n], 1 + dp[n - c])


        if dp[amount] != amount+1:
            return dp[amount]
        else:
            return -1

# python3 to run interactive prompt in terminal
