var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create a new node
    var node = Node(value);
    //set tail.next = new node
    if(list.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.
      this.tail = node;
    }
    //set list.tail = new node
  };

  list.removeHead = function(){
    var oldHead = this.head;

    if(this.head === this.tail) {
      list.head = null;
      list.tail = null;

    } else {
      this.head = this.head.next;
      oldHead.next = null;
    }

    return oldHead.value;
  };

  list.contains = function(target){
    var node = this.head;
    while(node !== null) {
      if(node.value === target) {
        return true;
      }
      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
