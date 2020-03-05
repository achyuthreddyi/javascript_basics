class Driver{
    constructor(name){
        this.name = name
    }
    get myname(){
        return this.name
    }
    set myname(val){
        this.name = val

    }
}

let abc = new Driver('john')
console.log(abc.myname)