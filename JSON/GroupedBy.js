let array = [
  { name: "Ali", age: 18 },
  { name: "Sara", age: 20 },
  { name: "Ahmed", age: 18 },
];
let fn = (person) => person.age;

function abc(array, fn) {
  let obj = {};
  for (const element of array) {
    const key = fn(element); 
    if (!obj[key])  obj[key] = [];
    obj[key].push(element); 
  }
  return obj;
}

console.log(abc(array, fn));
