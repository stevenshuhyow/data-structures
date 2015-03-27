var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.tail === null){
      // if LL is empty...do this
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
      //otherwise do this
    }
  };

  list.removeHead = function(){
    var removed = list.head.value
    list.head = list.head.next;
    return removed
  };

  list.contains = function(target){
    var currentnode = list.head


    while(currentnode.next !== null){
      if(target === currentnode.value){
        return true
      }
      currentnode = currentnode.next
    }
    if(list.tail.value === target){
      return true
    }
    return false
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
