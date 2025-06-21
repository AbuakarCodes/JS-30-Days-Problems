var lengthOfLastWord = function (s) {
  let Arry = s.split(" ");
  console.log(Arry);
  for (let i = Arry.length - 1; i >= 0; i--) {
    if (Boolean(Arry[i])) return Arry[i].length;
  }
};

console.log(lengthOfLastWord("Hello World"));
