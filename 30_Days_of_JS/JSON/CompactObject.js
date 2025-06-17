let arr = [null, 0, [0], [false, 16], [5]];
let object = {"o":11,"a":68,"m":18,"v":true,"p":93,"l":true,"n":79,"f":18,"z":{"d":true,"o":21,"m":82,"k":35,"l":26,"r":45,"c":33,"p":69,"j":27,"e":53,"q":97,"h":true,"a":true,"n":true,"f":73},"w":12,"s":true,"c":true,"g":29}
var compactObject = function (obj) {
  let ReturnedArray = [];
   let ReturnedObject = {};
  if (Array.isArray(obj)) {
    for (const item of obj) {
      if (typeof item === "object" && item !== null) {
        const result = compactObject(item);
        ReturnedArray.push(result);
      } else if (Boolean(item)) {
        ReturnedArray.push(item);
      }
    }
    return ReturnedArray;
  } else if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      const value = obj[key];
      if (Array.isArray(value)) {
        ReturnedObject[key] = compactObject(value);
      } else if (typeof value === "object" && value !== null) {
        const nested = compactObject(value);
        if (Object.keys(nested).length > 0) {
          ReturnedObject[key] = nested;
        }
      } else if (Boolean(value)) {
        ReturnedObject[key] = value;
      }
    }
    return ReturnedObject;
  }
};
