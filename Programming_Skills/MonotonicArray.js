var isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;
  for (let i = 0; i < nums.length-1; i++) {
    if(nums[i] > nums[i+1]) increasing = false
    if(nums[i] < nums[i+1]) decreasing = false
    return increasing || decreasing
  }
};

console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1,2,2]))
console.log(isMonotonic([6,7,4,4] ))
console.log(isMonotonic([5,3,2]))
