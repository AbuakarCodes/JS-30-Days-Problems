function map(...params) {
  let [Arr, Fun] = params;
  if (!Array.isArray(Arr)) {
    return "Enter Arry"
  }
  let returnedArry = [];

  for (let index = 0; index < Arr.length; index++) {
    returnedArry.push(Fun(Arr[index]));
  }

  return returnedArry;
}

let ARRY = [1,2,3,4]
function FUNCTION(n) {
    return n*2
}
let CHECK = map(ARRY, FUNCTION)
console.log(CHECK)
