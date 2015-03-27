var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.val = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.val] = value;
  this.val++;
}

queueMethods.dequeue = function(){
  if(this.val > 0){
    var deleted = this.storage[0];
    delete this.storage[0];
    this.val--;
    for(var i = 0; i < this.val ; i++){
        this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.val];
    return deleted;
  }

}

queueMethods.size = function(){
  return this.val;
}
