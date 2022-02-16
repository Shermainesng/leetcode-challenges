def max_sub_array(nums)
  current_sum = 0
  maximum_sum = nums[0]

  nums.each do |n|
    current_sum = 0 if current_sum < 0
    current_sum += n
    maximum_sum = [current_sum, maximum_sum].max
  end
  return maximum_sum
end
