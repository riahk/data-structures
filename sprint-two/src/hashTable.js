var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//TODO: adding duplicate keys/overwriting keys

HashTable.prototype.insert = function(k, v){
  var pair = [k,v];
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined) {
    this._storage.set(i, [pair]);
  } else {
    var bucket = this._storage.get(i);
    this._storage.set(bucket.push(pair));
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0; j < this._storage.get(i).length; j++) {
    if(this._storage.get(i)[j][0] === k) {
      return this._storage.get(i)[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0; j < this._storage.get(i).length; j++) {
    if(this._storage.get(i)[j][0] === k) {
      var value = this._storage.get(i)[j][1];
      this._storage.get(i).splice(j,1);

    }
  }
  return value;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
