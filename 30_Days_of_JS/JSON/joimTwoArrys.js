var join = function (arr1, arr2) {
    let ResultObject = {};

    for (let index = 0; index < arr1.length; index++) {
        ResultObject[arr1[index].id] = arr1[index];
    }
    for (index in arr2) {
        if(ResultObject[arr2[index].id]){
            ResultObject[arr2[index].id] = {...ResultObject[arr2[index]]}
        }else{
            ResultObject[arr2[index].id] = arr2[index];
        }
    }
    return Object.values(ResultObject)
};

