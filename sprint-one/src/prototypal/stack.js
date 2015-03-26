
var Stack = function() {
  var stack=Object.create(stackMethods);
  stack.storage={};
  stack.items=0;

  return stack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods={};

stackMethods.push = function(value){
  this.storage[this.items]=value;
  this.items++;
};
stackMethods.size=function(){
  return this.items;
}
stackMethods.pop=function(){
  if(this.items>0){
    var result=this.storage[this.items-1];
    this.items--;
  }
  return result;
}





