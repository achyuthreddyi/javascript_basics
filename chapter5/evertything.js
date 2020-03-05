// functin will take array and test condition as teh 

let abc = (array,conditoin)=>{
    for (let index = 0; index < array.length; index++) {
        // const element = array[index];
        if (!conditoin(array[index])) return false
}
    return true 
}

let res  = abc([1,2,3], n=>n<10)
console.log(res)