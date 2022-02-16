def max_product(nums)
  result = nums.max
  current_min = 1
  current_max = 1

  nums.each do |n|
    if n == 0
      current_min = 1
      current_max = 1
    end
    tmp = n * current_max
    current_max = [n * current_max, n * current_min, n].max
    current_min = [tmp, n * current_min, n].min
    result = [result, current_max].max
  end
  return result
end
