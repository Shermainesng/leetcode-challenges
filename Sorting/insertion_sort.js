// we don't swap items but shift larger items to the right, store the current value elsewhere then put it back when we're done shifting items to the right
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let numbers = [2, 4, 1, 3, 0];

function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort(numbers));

//.unshift adds one or more elements to the beginning of the array
//array.unshift[1] brings 1 to the front
