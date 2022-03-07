class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  //O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      //to avoid collisions
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  //O(1)
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  //to show us all our keys - O(n) --> arrays seem better for looping through
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i][0][0]) {
        //first 0 takes the array in the array, second 0 takes the first index of the array
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
