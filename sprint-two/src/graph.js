

var Graph = function(){
  var graph = Object.create(Graph.prototype);
  graph.data = [];
  return graph;
};

Graph.prototype.addNode = function(node){
  var nodeObj = { value: node, edges: [] };
  this.data.push(nodeObj);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.data.length; i++) {
    if(this.data[i].value === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.data.length; i++) {
    if(this.data[i].value === node) {
      for(var j = )
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



