var isEmpty = function(obj) {
  if(Array.isArray(obj)){
      if(obj.length === 0) return true
      else return false
  }else{
      let ObjKeyArrys = Object.keys(obj)
      if(ObjKeyArrys.length === 0) return true
      else return false
  }
};

console.log(isEmpty({nsje:3}))