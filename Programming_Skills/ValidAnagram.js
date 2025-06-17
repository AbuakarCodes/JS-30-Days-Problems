
var isAnagram = function (s, t) {
    let String1 = s.split("").sort().join("");
    let String2 = t.split("").sort().join("");
    
    if (String1.length !== String2.length) return false
    return String1 === String2
};

console.log(isAnagram("rac", "car"))