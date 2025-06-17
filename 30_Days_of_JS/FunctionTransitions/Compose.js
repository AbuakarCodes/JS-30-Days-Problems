var compose = function (functions) {
    return function (x) {
      let result = x;
      if (functions.length > 0) {
        for (let i = functions.length - 1; i >= 0; i--) {
          result = functions[i](result)
        }
      }
      return result;
    };
  };

let a = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(a(4))




