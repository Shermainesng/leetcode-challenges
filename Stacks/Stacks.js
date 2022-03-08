//Stacks
//Arrays - faster for indexing + lower memory (static/dynamic)
//Linked List - more dynamic memory

//Queues - never want to build this with an array!
//Linked Lists
//Arrays - once we remove the first element, we have to shift all the indexes of the whole array. LinkedList is less disruptive (O(1))
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//STACK WITH LINKED LIST
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const stackItem = new Node(value);
    this.top = stackItem;
    if (!this.bottom) {
      this.bottom = this.top;
    }
    this.length++;
  }
  pop() {
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
  }
}
const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
console.log(myStack);
