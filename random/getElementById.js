Document.prototype.myGetElementById = function(id){
  for(const element of this.children){
    if(element.id === id) return element;
    const found = Document.prototype.myGetElementById.call(element, id);
    if(found) return found;
  }
  return null;
};

console.log(myGetElementById('oi'));