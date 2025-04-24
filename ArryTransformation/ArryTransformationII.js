function filtredArry(...params) {
  let [Arr, Fun] = params;
  if (!Array.isArray(Arr)) {
    return "Enter Arry";
  }
  let returnedArry = [];
  for (let index = 0; index < Arr.length; index++) {
    let cheackingFunction = Fun(Arr[index]);
    if (cheackingFunction) returnedArry.push(Arr[index]);
  }
  return returnedArry;
}

let ARRY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3333, 55555, 6666666];
function FUNCTION(n) {
  return n > 2;
}
let CHECK = filtredArry(ARRY, FUNCTION);
console.log(CHECK);
