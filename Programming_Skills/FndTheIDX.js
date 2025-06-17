var strStr = function (haystack, needle) {
    let String1 = haystack.split("")
    let String2 = needle.split("")
    let arry = []

    for (let idx = 0; idx <= needle.length; idx++) {
        if (String2[idx] == String1[idx]) arry.push(true)
    }
    let Check = arry.every(e => true)
    console.log(arry)
    // if (Check) return 0
    // else -1
};

console.log(strStr("butsad", "sad"))
