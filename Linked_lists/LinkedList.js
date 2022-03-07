// 10 ---> 5 ----> 16
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

//JAVASCRIPT HAS NO BUILT-IN LINKEDLISTS :(
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    //creating the v first node when we instantiate a linkedlist
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  //O(1)
  append(value) {
    // const newNode = {
    //   value: value,
    //   next: null
    // };
    const newNode = new Node(value); //instantiate new node using node class
    this.tail.next = newNode; //point the pointer of the tail to this new node
    this.tail = newNode; //update the reference
    this.length++;
    return this;
  }

  //O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head; //set the pointer
    this.head = newNode; //update the reference
    this.length++;
  }

  //O(n) - looping
  insert(index, value) {
    //check inputs (esp when inserting sth)
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.length - 1) {
      this.append(value);
    }
    const newNode = new Node(value);
    //we will be inserting the new node at index, must update pointers for nodes before and after the new node
    //get the nodes before and after
    const firstAffectedNode = this.traverseToIndex(index - 1);
    const secondAffectedNode = firstAffectedNode.next;
    //set pointers
    firstAffectedNode.next = newNode;
    newNode.next = secondAffectedNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    //loop through the list and return the node at a particular index
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.insert(2, 99));
// myLinkedList.insert(2, 99);
