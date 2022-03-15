//iterate to find the smallest element and bring it to the front
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (i = 0; i < array.length; i++) {
    let minIndex = i; //set current index as minimum, then update the minimum if there are smaller values
    let temp = array[i];
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    array[i] = array[minIndex]; //swapping - bringing the smaller value in front
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
