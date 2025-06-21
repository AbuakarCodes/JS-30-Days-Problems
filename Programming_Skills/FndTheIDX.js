var strStr = function (haystack, needle) {
    let Haystack = haystack.split("")
    let Needle = needle.split("")
    let Checkarry = []

    for (let i = 0; i < Haystack.length; i++) {
        if(Needle[0]==Haystack[i]){
            for (let j = 0; j < Needle.length; j++) {
               if(Needle[j]==Haystack[j]) Checkarry.push(1)
                else Checkarry.push(0)
            }
        }
    }
    if (Checkarry.every(elem => elem ==1)) return 0
    else return -1

};

console.log(strStr("sasdge", "sad"))
