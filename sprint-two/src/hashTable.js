var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for(var i = 0 ; i < this._limit ; i++){
    this._storage.set(i,[]);
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var update = false
  _.each(bucket, function(item){
    if(item[0] === k){
      update = true
      item[1] = v
    }
  });
  if(update === false){
    bucket.push([k,v])
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var placement = this._storage.get(i)
    for(var i = 0 ; i< placement.length; i++){
      if(placement[i][0] === k){
          return placement[i][1]
      }
    }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(item, index){
    if(item[0] === k){
      bucket.splice(index, 1)
    }
  })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
