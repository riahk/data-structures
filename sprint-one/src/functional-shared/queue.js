var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.items = 0;
  queue.storage = {};

  queue.dequeue = queueMethods.dequeue;
  queue.enqueue = queueMethods.enqueue;
  queue.size = queueMethods.size;

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },
  dequeue: function() {
    if(this.items > 0) {
      var result = this.storage[0];
      for(var i = 1; i < this.items; i++) {
        this.storage[i-1] = this.storage[i];
      }
      this.items--;
    }
    return result;
  },
  size: function() {
    return this.items;
  }
};



