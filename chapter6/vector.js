class vec{
    constructor(x,y)
    {
        this.x =x;
        this.y = y
    }
    plus(other){
        return new vec(this.x + other.x, this.y+other.y)
    }
    get length(){
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }
}
let a = new vec(1,2)
let b = new vec(4,5)
console.log(a.plus(b))
console.log(a.length)

// const arr = [1,4,4,4,5,3]
// const map1  = new Map()
// for (let i =0; i<arr.length;i++){
//     if (map1.has(arr[i])){
//         map1.set(arr[i], map1.get(arr[i])+1)
//     }
//     else{
//         map1.set(arr[i], 1)
//                 }
// }
// console.log(map1)