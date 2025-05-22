let array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

var flat = function (arr, n) {
  if (n === 0) return arr;
  let flatenArry = [];
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index])) {
      let nestedArry = flat(arr[index], n - 1);
      flatenArry.push(...nestedArry);
    } else {
      flatenArry.push(arr[index]);
    }
  }
  return flatenArry;
};
console.log(flat(array,0))
