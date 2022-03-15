const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//start from the beginning, compare first 2 numbers, and swap it if the left is greater than right
//keep going until the largest numbers are at the back

//time complexity: O(n^2) - nested for loops
//space complexity: O(1) - no new variables are created
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //comparing the first 2 numbers
        //swap numbers
        let temp = array[j];
        array[j] = array[j + 1]; //first number is now the second number
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSort(numbers));
