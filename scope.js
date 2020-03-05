// let iamglobal = 'somevalue'
// function vara(){
//     if (true){
//         const iamlocal = 'someothervalue'
//         console.log(iamglobal)
//         console.log(iamlocal)
//     }
//     // console.log(iamlocal)

// }
// console.log(iamlocal)
// vara()
// var is function scope  never confuse it with the global scope
// let is the local and the block scope
// const is similar to the let's scope but difference is theat it needs to  be declared with somw constant


// functions do not have access to each others scope
function first(){
    const firstvaraible = 'i am part of first'

}
function second(){
    first()
    // console.log(firstvaraible)
}
second()