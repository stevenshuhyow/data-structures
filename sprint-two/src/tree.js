var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){

  var result = false;

  var container = function(node){


    if (node.value === target){
      result = true;
      return;
    }

    _.each(node.children, function(child){
       container(child);
    });
  }

  container(this);

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
