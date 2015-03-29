var DoubleLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = defaultNode(value);
    if(list.tail === null){
      // if LL is empty...do this
      list.tail = newNode;
      list.head = list.tail;
      list.head.next = list.tail;
      list.head.prev = null;
      list.tail.next = null;
      list.tail.prev = list.head;
    } else {
      list.tail.next = newNode;
      newNode.next = null;
      newNode.prev = list.tail
      list.tail = newNode;
      //otherwise do this
    }
  };

  list.addToHead = function(value){
     var newNode = defaultNode(value);
    if(list.head === null){
      // if LL is empty...do this
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.head.next = newNode;
      newNode.next = null;
      newNode.prev = list.head
      list.head = newNode;
      //otherwise do this
    }
  };

  list.removeHead = function(){
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.removeTail = function(){
    var removed = list.tail.value;
    if(list.head.next === list.tail.prev){
      list.tail = null;
      list.head = null;
    } else{
    list.tail = list.tail.prev;
    console.log(list.tail)
  }
    return removed;
  }

  list.contains = function(target){
    var currentnode = list.head
    while(currentnode.next !== null){
      if(target === currentnode.value){
        return true;
      }
      currentnode = currentnode.next;
    }
    if(list.tail.value === target){
      return true;
    }
    return false;
  };
  return list;
};

var defaultNode = function(value){
  var node = {};

  node.value = value;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
