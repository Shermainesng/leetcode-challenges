def longest_common_prefix(strs)
  return "" if strs.empty?
  prefix = ""
  base_word = strs[0]
  base_word.chars.each_with_index do |letter, index|
    if strs.all? { |word| word[index] == letter}
      prefix += letter
    else
      break
    end
  end
  return prefix
end
