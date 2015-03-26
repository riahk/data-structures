var Tree = function(value){
  var newTree = {};
  _.extend(newTree,treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var childs=Tree(value);
  this.children.push(childs);

};

treeMethods.contains = function(target){
  var hasTarget = false;
  var checkTree = function(tree){
    if(tree.value === target){
        hasTarget = true;
    }
    for(var i = 0;i<tree.children.length;i++){
        checkTree(tree.children[i]);
    }
  }
  checkTree(this);
  return hasTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
