//O(n^2) --> .splice() is an O(n) method
// var moveZeroes = function (nums) {
//   for (i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1);
//       nums.push(0);
//     }
//   }
//   return nums;
// };

// console.log(moveZeroes([0, 0, 1]));

//O(n)
function moveZeroes(nums) {
  let left = 0;
  nums.forEach((el, index) => {
    if (el !== 0) {
      let tmp = nums[left];
      nums[left] = el;
      nums[index] = tmp;
      left++;
    }
  });
  return nums;
}

console.log(moveZeroes([0, 0, 1]));
