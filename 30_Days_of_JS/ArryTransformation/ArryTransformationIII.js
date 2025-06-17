function Reduce(...params) {
  let [arr, fn, initial] = params;
  if (arr.length !== 0) {
    let returnVal = 0;
    for (let index = 0; index < arr.length; index++) {
      returnVal += fn(initial, arr[index]);
    }
    return returnVal;
  }
  return initial;
}

let ARRY = [1, 2, 3, 4, 6, 7, 8];
function FUNCTION(acc, crnt) {
  return acc + crnt;
}
let CHECK = Reduce(ARRY, FUNCTION, 0);
console.log(CHECK);


