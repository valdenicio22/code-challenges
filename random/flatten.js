Array.prototype.flatten = function(){
  const flattenArr = [];
  for (const value of this){
    if(Array.isArray(value)) {
      flattenArr.push(...value.flatten());
      // res = flattenArr.concat(value.flatten());
    }else {
      flattenArr.push(value);
    }
  }
  return flattenArr
};

console.log([].flatten());
console.log([1, 2, 3].flatten());
console.log([[1, 2], 3, 4].flatten());
console.log([1, 2, [3,[4, 5, [6]]], 7].flatten());