var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, nextnumber)=>{
      return acc+nextnumber
    },0)
}

ArrayWrapper.prototype.toString = function() {
   return `[${ this.nums.join(",")}]`
}


let a = new ArrayWrapper ([1,2])

console.log(a+a)
console.log(a)
console.log(a+a)

