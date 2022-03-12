//Queues - never want to build this with an array!
//Linked Lists
//Arrays - once we remove the first element, we have to shift all the indexes of the whole array. LinkedList is less disruptive (O(1))

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentLast = this.last;
      this.last = newNode;
      currentLast.next = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    let currentFirst = this.first;
    this.first = this.first.next;
    this.length--;
    return currentFirst;
  }
}

let myQueue = new Queue();
myQueue.enqueue("joy");
myQueue.enqueue("matt");
myQueue.enqueue("pavel");
myQueue.enqueue("samir");
myQueue.dequeue();
console.log(myQueue);
