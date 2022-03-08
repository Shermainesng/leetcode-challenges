class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    //creating the v first node when we instantiate a linkedlist
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  //O(1)
  append(value) {
    const newNode = new Node(value); //instantiate new node using node class
    newNode.prev = this.tail;
    this.tail.next = newNode; //point the pointer of the tail to this new node
    this.tail = newNode; //update the reference
    this.length++;
    return this;
  }

  //O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.prev = null;
    newNode.next = this.head; //set the pointer
    this.head = newNode; //update the reference
    this.length++;
  }

  //O(n) - looping
  insert(index, value) {
    //check inputs (esp when inserting sth)
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    if (index === 0) {
      //if inserting a new node at the head
      this.prepend(value);
    }
    const newNode = new Node(value);
    const firstAffectedNode = this.traverseToIndex(index - 1);
    const secondAffectedNode = firstAffectedNode.next;
    //set pointers
    firstAffectedNode.next = newNode;
    newNode.prev = firstAffectedNode;
    newNode.next = secondAffectedNode;
    secondAffectedNode.prev = newNode;
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

  //O(n)
  delete(index) {
    if (index === 0) {
      //if head is deleted
      let newHead = this.head.next;
      this.head = newHead;
      return this.printList();
    }
    const nodeBeforeDeleted = this.traverseToIndex(index - 1);
    const nodeToDelete = nodeBeforeDeleted.next;
    nodeBeforeDeleted.next = nodeToDelete.next;
    this.length--;
    return this.printList();
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

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(16);
console.log(myLinkedList.insert(3, 99));
console.log(myLinkedList);
