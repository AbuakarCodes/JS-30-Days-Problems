function Reduce(...params) {
  let [arr, fn, initial] = params;
  if (arr.length !== 0) {
    let returnedArry = [];
    for (let index = 0; index < arr.length; index++) {
      returnedArry.push(fn(initial, arr[index]));
    }
    return returnedArry;
  }
  return initial;
}

let ARRY = [1, 2, 3, 4];
function FUNCTION(acc, crnt) {
  return acc + crnt;
}
let CHECK = Reduce(ARRY, FUNCTION, 0);
console.log(CHECK);
