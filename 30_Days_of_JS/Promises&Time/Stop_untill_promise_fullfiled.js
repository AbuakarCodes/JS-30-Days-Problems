async function sleep(millis) {
    return new Promise((res, rej)=>{
        setTimeout( ()=>res(),millis)
    })
}

// Testing
// Output will apear after __ milli sec
 sleep(1000).then(() => console.log(Date.now())) 
