

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = {edges: []}
};

Graph.prototype.contains = function(node){
  for (var key in this.storage){
    if (key === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var edgeslist = this.storage[fromNode].edges
  for (var i = 0 ; i < edgeslist.length; i++){
    if (edgeslist[i] === toNode){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges.push(toNode)
  this.storage[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var edgeslist = this.storage[fromNode].edges
  for (var i = 0 ; i < edgeslist.length; i++){
    if (edgeslist[i] === toNode){
      edgeslist.splice(i,1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


