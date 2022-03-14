// O(n)
function findFactorialRecursive(number) {
  //basecase - this is when we stop
  if (number === 2) {
    return 2;
  }
  //lower the number until it hits 2
  return number * findFactorialRecursive(number - 1);
}

// O(n)
// function findFactorialIterative(number) {
//   let answer = 1;
//   for (i = 1; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// }
console.log(findFactorialRecursive(5));
