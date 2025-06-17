var findTheDifference = function (s, t) {
  let String1 = s.split("").sort();
  let String2 = t.split("").sort();
  let BiggestString;

  if (String1.length > String2.length) BiggestString = String1;
  else BiggestString = String2;

  for (let idx = 0; idx <= BiggestString.length; idx++) {
    if (BiggestString[idx] !== String1[idx]) return BiggestString[idx];
  }
};

console.log(findTheDifference("abc", "aebc"));
