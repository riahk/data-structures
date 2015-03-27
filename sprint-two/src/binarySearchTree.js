var BinarySearchTree = function(value){
  this.right=null;
  this.left=null;
  this.value=value;
};

BinarySearchTree.prototype.insert = function(value){
  //var node = new BinarySearchTree(value);
  //1. check has right child

   if(value>this.value){
    if(this.right===null){
      var node = new BinarySearchTree(value);
      //make the tree
      this.right=node;
    }else{
      this.right.insert(value);
    }

  }else{
    if(this.left===null){
      var node = new BinarySearchTree(value);
      //make the tree
      this.left=node;
    }else{
      this.left.insert(value);
    }
  }

}
BinarySearchTree.prototype.contains = function(value){
   //var hasValue = false;
   if(value===this.value){
    return true;
   } else if(value>this.value){
    if(this.right===null){
      return false;
    }else{
      return this.right.contains(value);
    }

  }else{
    if(this.left===null){
      return false;
    }else{
      return this.left.contains(value);
    }
  }
}
BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left!=null){
    this.left.depthFirstLog(cb);
  }else if(this.right!=null){
    this.right.depthFirstLog(cb);
  }

}




/*
 * Complexity: What is the time complexity of the above functions?
 */
