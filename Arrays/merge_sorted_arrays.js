function merge_sorted_arrays(arr1, arr2) {
  //check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  var merge_array = arr1.concat(arr2);
  merge_array.sort((a, b) => a - b);
  return merge_array;
}

console.log(merge_sorted_arrays([0, 3, 4, 1], [4, 6, 30]));
