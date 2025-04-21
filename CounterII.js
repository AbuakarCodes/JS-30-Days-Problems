function Counter(params) {
    let initValue = params
    function increment(params) {
      return initValue+=1
    }
    function decrement(params) {
        return initValue-=1
    }
    function reset(params) {
       let resetValue =  params
       initValue = resetValue
       return initValue
    }

    return{
        increment,
        decrement,
        reset
    }
}

console.log(Counter())
console.log(Counter(5).increment())
console.log(Counter(5).decrement())
console.log(Counter(5).reset(10))
