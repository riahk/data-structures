var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack={};
  stack.storage={};
  stack.items=0;
  stack.push=stackMethods.push;
  stack.pop=stackMethods.pop;
  stack.size=stackMethods.size;
  return stack;
};

var stackMethods = {

  push: function(value){
//stack.push
//debugger;
   this.storage[this.items]=value;
   this.items++;

  },
  pop: function(){
    if(this.items>0){
      var result =this.storage[this.items-1];
      this.items--;
    }

    return result;

  },
  size: function(){
    return this.items;
  }

};


