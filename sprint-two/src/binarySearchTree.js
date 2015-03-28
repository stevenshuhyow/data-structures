var BinarySearchTree = function(value){

  var someInstance = {};
  someInstance.value = value;

  _.extend(someInstance, BinarySearchTreeMethods)

  return someInstance;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value){
    if(value > this.value){
      if(!this.right){
        this.right = BinarySearchTree(value);
      }
      else {
        this.right.insert(value)
      }
    } else if(value < this.value){
      if(!this.left){
        this.left = BinarySearchTree(value);
      }
      else {
        this.left.insert(value)
      }
    }
}

BinarySearchTreeMethods.contains = function(value){
  var result = false;
  var checker = function(node){
    if (result === false){
      if (node.value === value){
        result = true;
      } else if (value > node.value && node.right){
        checker(node.right);
      } else if(value < node.value && node.left){
        checker(node.left);
        }
    }
  }
  checker(this);
  return result;
}

BinarySearchTreeMethods.depthFirstLog = function(callback){
  var checker = function(node){
    callback(node.value)
    if (node.left){
      checker(node.left);
    } else if (node.right){
      checker(node.right);
    }
  }
  checker(this);
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
