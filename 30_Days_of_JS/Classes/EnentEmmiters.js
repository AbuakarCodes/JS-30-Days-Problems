class EventEmitter {
    constructor() {
        this.Events = {}
    }
    subscribe(eventName, callback) {
        if (!this.Events[eventName]) this.Events[eventName] = [];
        // did it (line no 6) cuz need just one arry if we didint use if statement then it make new arry evey time 
        this.Events[eventName].push(callback);

        return {
            unsubscribe: () => {
                const index = this.Events[eventName].indexOf(callback);
                if (index !== -1) this.Events[eventName].splice(index, 1);
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.Events[eventName]) return []
        else return this.Events[eventName].map((callback) => callback(...args))
    }
}

let a = new EventEmitter()
a.subscribe("abc", ()=>{return 5})
a.subscribe("abc", ()=>{return 7})
a.subscribe("abcd", ()=>{return 7})

console.log(a.emit("abc"))
console.log(a.emit("abcd"))