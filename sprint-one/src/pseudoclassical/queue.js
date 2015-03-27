var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.val = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.val] = value;
  this.val++;
}

Queue.prototype.dequeue = function(){
  if(this.val > 0){
    var deleted = this[0];
    delete this[0];
    this.val--;
    for(var i = 0; i < this.val ; i++){
      this[i] = this[i + 1];
    }
    delete this[this.val]
    return deleted;
  }

}

Queue.prototype.size = function(){
  return this.val;
}
