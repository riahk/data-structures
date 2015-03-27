

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
      this.data.splice(i,i+1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.data.length; i++) {
    if(this.data[i].value === (fromNode || toNode)) {
      return _.contains(this.data[i].edges, fromNode)
              || _.contains(this.data[i].edges, toNode);
    }
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //find first node, add edge
  var firstEdge = false;
  var secondEdge = false;

  for(var i = 0; !(firstEdge && secondEdge); i++) {
    if(this.data[i].value === fromNode) {
      this.data[i].edges.push(toNode);
      firstEdge = true;
    }
    if(this.data[i].value === toNode) {
      this.data[i].edges.push(fromNode);
      secondEdge = true;
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var firstEdge = false;
  var secondEdge = false;

  for(var i = 0; !(firstEdge && secondEdge); i++) {
    if(this.data[i].value === fromNode) {
      for(var j = 0; j < this.data[i].edges.length; j++) {
        if(this.data[i].edges[j] === toNode) {
          this.data[i].edges.splice(j, j+1);
          firstEdge = true;
        }
      }
    }
    if(this.data[i].value === toNode) {
      for(var k = 0; k < this.data[i].edges.length; k++) {
        if(this.data[i].edges[k] === fromNode) {
          this.data[i].edges.splice(k, k+1);
          secondEdge = true;
        }
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var i = 0; i < this.data.length; i++) {
    cb(this.data[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



