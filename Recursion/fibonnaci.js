//0, 1, 1, 2, 3, 5, 8, 13, 21
//n is the index n=4, return 3

//
// function fibonacciIterative(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr[n];
// }

// console.log(fibonacciIterative(8));

//O(2^n) - really bad
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(2));

//RECURSION
//anything you can do with a recursion CAN be done iteratively (loop)
//PROs: DRY, Readability
//CONs: Large stack (increases memory footprint, stack overflows, might be expensive)

//tail call optimization - helps to overcome large stack issue as it allows recursions to be called without increasing the call stack

//when to use recursion
//complicated problems such as BFS + DFS or sorting --> these all use recursion
//everytime you are using a tree or converting something into a tree, consider RECURSION
//1 - divided into a number of subproblems that are smaller instances of the same problem
//2 - each instance of the subproblem is identical in nature
//3 - the solutions of each subproblem can be combined to solve the problem at hand
//DIVIDE AND CONQUER using recursion
