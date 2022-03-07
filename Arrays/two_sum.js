var twoSum = function (nums, target) {
  //find difference between target - el
  //store the diff in a hash
  //iterate through nums, and see if the number exists in the hash
  let hash = {};
  let arr = [];

  nums.forEach((el, index) => {
    let diff = target - el;
    if (hash[el] !== undefined) {
      arr.push(index);
      arr.push(nums.indexOf(target - el));
    }
    hash[diff] = diff;
  });
  return arr;
};

console.log(twoSum([2, 7, 11], 9));

// var twoSum = function (nums, target) {
//   var map = new Map();

//   for (var i = 0; i < nums.length; i++) {
//     var num = nums[i];
//     if (map.get(num) === undefined) map.set(target - num, i);
//     else return [map.get(num), i];
//   }
// };
