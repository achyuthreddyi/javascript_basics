// // console.log('hello world')
// // console.log('hello world'>'achyuth')
// // console.log(4>2 ? 1:2)
// // console.log('5'-1)
// // console.log(`hey 'achyuth'`)
// // console.log('hey \'achyuth\'')
// // let actual = '100'
// // let bonus = 20
// // let sum = actual -bonus
// // console.log(sum)
// // a = false
// // console.log(a+1)

// // var a = 5
// // if(true){
// //     const b = 5
// //     // a = 6
// //     console.log(a+=1)
// // }
// // console.log(b)
// numbers = [1,2,3,4,5,6,7,8,9]
// // console.log(numbers.shift())
// console.log(numbers)
// // console.log(numbers.shift())
// // console.log(numbers)
// // numbers.unshift(10)
// // console.log(numbers)
// console.log(numbers.splice(2,1,))
// console.log(numbers)

// let a =7, j=0
// for (let i ='#' ; j<a;i+='#'){
//     console.log(i)
//     j+=1
// }
// for (let i = 0; i<101;i+=1){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log('fizzbuzz')
//     }
//     if(i % 3 == 0){
//         console.log('fizz')
//          }
//     else if(i % 5 == 0){
//         console.log('buzz')
//     }
//     else{
//         console.log(i)
//     }
// }
// for(let n=1 ;n<=100;n++){
//     let output = ""
//     if (n%3 ==0 ) output+='fizz';
//     if(n%5 ==0 ) output +='buzz';
//     console.log(output ||n);
// }

// for (let n=0;n<8;n+=1){
//     let a =' ',b='#',output ='';
//     for (let k=0;k<8;k+=1){
//         if (n%2==0){
//             output = a+b;
//         }
//         else {
//             output = b+a;
//         }
        
//     }
//     console.log(output)

// }

let size =8;
// let bosrd = "";
for (let y =0;y<size;y++){
    let bosrd = "";
    for (let x =0;x<size; x++){
        if ((x+y)%2 ==0){
            bosrd += ' ';
            }
            else{
                bosrd+= '#';
            }
    }
    // bosrd += `\n`
    console.log(bosrd)
}

// console.log('sum is ${2+3}')
console.log(`sum is ${2+37}`)
console.log(typeof(bosrd))