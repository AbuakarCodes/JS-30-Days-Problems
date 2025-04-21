function Main(params) {
  let firstlyCalled = Math.floor(params);
  let SecondCalled = Math.floor(params);
  let othercalled = Math.floor(params);
  return function Counter() {
    if (firstlyCalled == SecondCalled) {
        SecondCalled += 1;
      return firstlyCalled;
    } else {
      return othercalled += 1;
    }
  };
}

let a = Main(1)
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())
console.log(a())

let b = Main(10)
console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b())

// Logic 
// if we didint use the second variable the the if condition will never terminate and we'll get firstly called value,the only purpose of secondCalled value is terminate the if statement 
// just do post increment 😒