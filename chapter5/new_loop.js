// function takes a value ,a test function, update function, and a body function
let a = new Array()
// let a ='abc '
function higherownloop(value,testfun,updatefun,bodyfun){
    let i = value
    while (testfun(i)){
        // console.log(i)
        i = updatefun(i)
        // console.log(i)
        bodyfun(i)

    }
    
}
higherownloop(3,n=>n>0,n=>n-1,n=>a.push(n))
console.log(a)
   

// for (let i =value;testfun(i);updatefun(i)){
    // bodyfun(i)
