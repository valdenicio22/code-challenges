Array.prototype.myMap = function(cb){
  const updatedArray = [];
  for(let i=0;i<this.length;i++){
    updatedArray.push(cb(this[i]));
  }
  return updatedArray;
};

[1, 2, 3].myMap(console.log);
["a", "b", "c"].myMap(console.log);
