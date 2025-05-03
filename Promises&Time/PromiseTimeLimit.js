// MY Approch

var timeLimit = function (fn, t) {
  return async function (...args) {
    let start = Date.now();
    let inFn = await fn(...args);
    let end = Date.now();
    let TimeTaken = end - start;

    return new Promise((res, rej) => {
      if (TimeTaken < t) res(inFn);
      else rej("Time Limit Exceeded");
    });
  };
};

//   Corrected One
var timeLimit = function (fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
      ),
    ]);
  };
};

//   "In my code, it waits until the given function "fn" executes. I was comparing the execution time of "fn" with the given time t, but the requirement is that the given function fn should be cancelled if it exceeds the time limit."

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
// limited(150).catch(console.log)
