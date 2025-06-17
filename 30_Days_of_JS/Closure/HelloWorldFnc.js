function createHelloWorld(params) {
  return function returnedFunc(params) {
   return "Hello World";
  };
}

let a = createHelloWorld() 
console.log(a())