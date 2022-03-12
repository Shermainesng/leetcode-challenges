//Stacks
//Arrays - faster for indexing + lower memory (static/dynamic)
//Linked List - more dynamic memory

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//STACK WITH LINKED LIST
// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const stackItem = new Node(value);
//     if (this.length === 0) {
//       this.top = stackItem;
//       this.bottom = stackItem;
//     } else {
//       let currentTop = this.top;
//       this.top = stackItem; //set the new top
//       this.top.next = currentTop; //reset pointers
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     let currentTop = this.top;
//     this.top = this.top.next; //remove the current top and set next one to be the top
//     this.length--;
//     return currentTop;
//   }
// }

//STACK WITH ARRAYS
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
}
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1]; //the last element of the array is our top
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    this.array.pop();
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
console.log(myStack);
