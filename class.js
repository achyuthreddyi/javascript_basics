class User{
    constructor(firstname,lastname,credits){
        this.firstName = firstname
        this.lastname = lastname
        this.credits = credits
    }
    getfullname(){
        // let fullname = `the full name is ,${this.firstName} ${this.lastname}`
        // return fullname
        return `the full name is in the parent class ,${this.firstName} ${this.lastname}`
    }
    editname(newname){
        const myname = newname.split(" ")
        this.firstName = myname[0]
        this.lastname = myname[1]

    }
    editname(newname, modname){
        const myname = newname.split(" ")
        this.firstName = myname[0]
        this.lastname = myname[1]
        console.log(`hey man ${modname}`)


    }
}
class teacher extends User{
    constructor(firstName,lastname,credit,subject){
        super(firstName,lastname,credit);
        this.subject = subject
    }
    // getfullname(){
    //     return `the full name is changed in the child class ,${this.firstName} ${this.lastname}`
        

    // }

}
const john = new teacher('john','anderson',34,'python')
// const sammy = new User('sammy','jackson',34)
john.editname('achyuth reddy','shamala')
// console.log(john.getfullname())
console.log(john)