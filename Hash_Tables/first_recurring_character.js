// O(n^2) method
// function firstRecurringCharacter(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return undefined;
// }
// console.log(firstRecurringCharacter([2, 5, 1, 2, 3]));

//O() with hash tables
function firstRecurringCharacter2(arr) {
  //iterate through the array, add each el to a hash table, and then check if it alr exists in the hash table
  let hash = {};
  arr.forEach(el => {
    if (hash[el] !== undefined) {
      //0 is a falsey value so if (0) will result in false
      return el;
    } else {
      hash[el] = el;
    }
  });
  return undefined;
}
firstRecurringCharacter2([2, 5, 1, 2, 3]);
