var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
//push x to back of queue
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
//remove the element at the front and return it
MyQueue.prototype.pop = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  var pop = this.stack2.pop(); //the element at the front of the q

  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop()); //pass stack2's stuff back to stack1
  }

  return pop;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 ? true : false;
};
