var promiseAll = async function (functions) {
  let result = [];
  let promisesResolved = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((fn, idx) => {
      fn()
        .then((value) => {
          result[idx] = value;
          promisesResolved++;
          if (promisesResolved == functions.length) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
};

let functionsArry = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100))
];
const promise = promiseAll(functionsArry);
promise.then(console.log); 
