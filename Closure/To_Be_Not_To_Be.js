function expect(params) {
  let firstValue = params;
  
  function toBe(toBeVal) {
    if (toBeVal === firstValue) {
      return true;
    } else {
      return "Not Equal";
    }
  }
  function notToBe(notToBe) {
    if (notToBe !== firstValue) {
      return true;
    } else {
      return " Equal";
    }
  }
  if (!isNaN(firstValue)) {
    return {
        toBe,
        notToBe,
      };
  }else{
    return "Plese Enter a number"
  }
}
console.log(expect('sss'));
console.log(expect(99).notToBe(99));
