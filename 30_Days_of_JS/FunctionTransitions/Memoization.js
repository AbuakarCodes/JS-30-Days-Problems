

function memoize(fn) {
  let cacheStorage = {};
  let funCount = 0;
  return function (...args) {
    if (cacheStorage[args]  !== undefined) {
      return cacheStorage[args]
    } else {
      if (args.length == 0) {
        return funCount;
      } else {
        let fnCalledreturn = fn(...args);
        cacheStorage[args] = fnCalledreturn;
        funCount += 1;
        return fnCalledreturn
      }
    }
  };
}

function sum(a, b) {
  return a + b;
}
let A = memoize(sum);

console.log(A(0,0))
console.log(A(0,0))
console.log(A(1,2))


console.log(A())
