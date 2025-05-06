Array.prototype.AbxReverse = function (params) {
  let reverseArry = [];
  for (let index = this.length-1; index >= 0; index--) {
    reverseArry.push(this[index]);
  }
  return reverseArry;
};

let a = [1,2,3,4,5,6,7,"sd","sdijh3idj","si3hjis"]
let b = [10,11,12,13,14,15,16]

// console.log(b.AbxReverse())
// console.log(a.AbxReverse())

