// function containsCommonItem(arr1, arr2) {
//   let map = {};
//   arr1.forEach(el => {
//     if (!map[el]) {
//       const key = el;
//       map[key] = true;
//     }
//   });

//   arr2.forEach(el2 => {
//     if (map[el2]) {
//       return true;
//     }
//   });
//   return false;
// }

//O(a + b)
//space complexity = O(a) - creating a new object takes up memory
//faster in terms of time complexity but is heavier on space complexity
// node Arrays/containCommonItems to run code

//more readable solution
function containsCommonItem(arr1, arr2) {
  console.log(arr1.some(item => arr2.includes(item)));
}
const arr1 = ["a", "b", "c", "x"];
const arr2 = ["x", "y", "a"];
containsCommonItem(arr1, arr2);

//some() method tests whether at least one element in the array passes the test implemented by the provided function
