def max_profit(prices)
  max_profit = 0
  left = 0
  right = 1
  while right < prices.length
    if prices[left] < prices[right]
      profit = prices[right] - prices[left]
      max_profit = profit if profit > max_profit
    else
      left = right
    end
    right += 1
  end
  return max_profit
end
