var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.val = 0;
  return someInstance;
};

queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.val] = value;
  this.val++;
}

queueMethods.dequeue = function(){
  if(this.val > 0){
    var deleted = this[0];
    delete this[0];
    this.val--;
    for(var i = 0; i < this.val ; i++){
      this[i] = this[i + 1];
    }
    return deleted;
  }

}

queueMethods.size = function(){
  return this.val;
}

