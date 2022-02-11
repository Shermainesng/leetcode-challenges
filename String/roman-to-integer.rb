ROMAN = {
    "I" => 1,
    "V" => 5,
    "X" => 10,
    "L" => 50,
    "C" => 100,
    "D" => 500,
    "M" => 1000
    }


def roman_to_int(s)
  result = 0
  arr = s.split("")

  arr.each_with_index do |n, i|
    if arr[i + 1] && ROMAN[arr[i + 1]] > ROMAN[arr[i]]
      result += -ROMAN[n]
    else
      result += ROMAN[n]
    end
  end

  result
end

puts roman_to_int('III')

# ruby ruby/roman-to-integer.rb to run file
