class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        //traverse the whole tree to find a place to insert node in
        if (value < currentNode.value) {
          //left - smaller values are always on the left
          if (!currentNode.left) {
            currentNode.left = newNode; //if there is nth on the left, insert the new node there
            return this;
          }
          currentNode = currentNode.left; //else keep iterating in the while loop
        } else {
          //right - bigger values are on the right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      //root doesn't exist, won't find that node
      return false;
    }
    //
    let currentNode = this.root;
    while (currentNode) {
      //compare currentNode to the value we are looking for
      //currentNode will be null if we have traversed through the whole tree but can't find our node
      if (value < currentNode.value) {
        //go left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(100));
// JSON.stringify(traverse(tree.root));
// console.log(tree);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//arboreal js - library for trees
