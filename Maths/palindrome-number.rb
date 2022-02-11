def is_palindrome(x)
    return false if x < 0
    return true if x < 10
    x.to_s == x.to_s.reverse
end
