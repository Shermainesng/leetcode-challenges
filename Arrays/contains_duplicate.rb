def contains_duplicate(nums)
  hash = {}
  nums.each do |x|
    return true if hash[x] == x
    hash[x] = x
  end
  false
end

def contains_duplicate(nums)
  #create a hash
  #iterate through nums, and increment its count in the hash
  hash_counter = {}
  duplicates = false
  nums.each do |n|
    if hash_counter.key?(n)
      hash_counter[n] += 1
      duplicates = true
    else
      hash_counter.store(n, 0)
    end
  end
  puts hash_counter
  if duplicates == true
    return true
  else
    return false
  end
end
