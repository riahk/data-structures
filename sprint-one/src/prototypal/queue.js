var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.items = 0;
  return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.items] = value;
  this.items++;
}

queueMethods.dequeue = function() {
  if(this.items > 0) {
    var result = this.storage[0];
    for(var i = 1; i < this.items; i++) {
      this.storage[i-1] = this.storage[i];
    }
    this.items--;
  }
  return result;
}

queueMethods.size = function() {
  return this.items;
}



