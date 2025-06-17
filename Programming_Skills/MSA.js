var mergeAlternately = function (word1, word2) {
  let ReturnedString = [];
  let loopCondition = 0;
  let W1 = word1.split("");
  let W2 = word2.split("");

  if (W1.length > W2.length) loopCondition = W1.length
  else loopCondition = W2.length

  for (let idx = 0; idx <= loopCondition; idx++) {
    if (W1[idx] !== "Undefined") ReturnedString.push(W1[idx]);

    if (W2[idx] !== "Undefined") ReturnedString.push(W2[idx]);
  }
  return ReturnedString.join("");
};

console.log(mergeAlternately("abc", "pqr"));
