var once = function (fn) {
  let counter = 0;
  return function (...args) {
    counter += 1;
    if (!(counter > 1)) {
      let a = fn(...args);
      return a;
    }else{
        return "U called function more then one time"
    }
  };
};

let fn = (a, b, c) => a * b * c;
let a = once(fn);
console.log(a(1,2,3,4))
console.log(a(1,2,3,4))
