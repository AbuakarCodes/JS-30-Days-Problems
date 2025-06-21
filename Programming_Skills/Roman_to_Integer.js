var romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let Input = s.split("");
  let ChunckedArry = [];
  let NumReturn = []

  for (let i = 0; i < Input.length; i += 2) {
    if (i + 1 < Input.length) ChunckedArry.push([Input[i], Input[i + 1]]);
    else ChunckedArry.push([Input[i]]);
  }
  ChunckedArry.reverse()

  for (const element of ChunckedArry) {
     for (let j = 0; j < element.length; j++) {
            NumReturn.push(romanNumerals[element])
            
        }
  }

  return NumReturn;
};

// console.log(romanToInt("XXX"));
let A ="   fly me   to   the moon  ".split(" ")
console.log(A)