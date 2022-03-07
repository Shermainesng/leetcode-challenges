//'hi my name'
//'eman ym ih'

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return;
  }
  array_str_reverse = str.split("").reverse();
  str_reverse = array_str_reverse.join("");
  return str_reverse;
}

// console.log(reverse("hello my name"));

//another method - iterate from backwards and push each letter into array then turn them into a string
// const backwards = [];
// const totalItems = str.length - 1;
// for (let i = totalItems; (i = 0); i--) {
//   backwards.push(str[i]);
// }
// return backwards.join("");

//most modern method
const reverse3 = str => str.split("").reverse().join("");
console.log(reverse3("hello my name"));
