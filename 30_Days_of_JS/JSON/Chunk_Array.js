var chunk = function (arr, size) {
  let index = 0;
  let DummyArry = [];
  let ReturnedArry = [];
  while (index < arr.length ) {
    for (let i = 0; i < size; i++) {
      if (arr[index] !== undefined) {
        DummyArry.push(arr[index]);
        index++;
      } else {
        break;
      }
    }
    ReturnedArry.push(DummyArry);
    DummyArry = [];
  }
  return ReturnedArry;
};

let arr = [1,2,3,4,5];
let size = 3;

console.log(chunk(arr, size));
console.log(chunk([], 2));
console.log(chunk([1,2,3,4,5,5,6,6,7,87,8,99,9], 2));
