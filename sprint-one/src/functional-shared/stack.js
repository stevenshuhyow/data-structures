var Stack = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var someInstance= {};
 someInstance.storage = {}
 someInstance.val = 0

 _.extend( someInstance, stackMethods)

 return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value){
    this.storage[this.val]=value;
    this.val++;
  };

  stackMethods.pop = function(){
    if(this.val>0){
      var result= this.storage[this.val-1];
      delete this.storage[this.val-1];
      this.val--;
      return result;
    }
  };

  stackMethods.size = function(){
    return this.val;

  };


