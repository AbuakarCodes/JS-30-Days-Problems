var addTwoPromises = async function (promise1, promise2) {
  let P1 = await promise1.then(data => data);
  let P2 = await promise2.then(data => data);
  return new Promise((resolve, reject) => {
    resolve(P1 + P2);
  });
};

// Testing

const promise1 = new Promise((resolve, reject) => {
  resolve(2);
});
const promise2 = new Promise((resolve, reject) => {
  resolve(4);
});

addTwoPromises(promise1, promise2).then((data)=>{
    console.log(data)
})

