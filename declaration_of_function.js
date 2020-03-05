// function increase(current){
//     var newhigh = 2 * current
//     return newhigh
// }

//  come back here
// console.log(abc(5))

//  var abc = function(current){
//     var newhigh = 2 * current
//     return newhigh

//  }

// console.log(abc(4))
// calling a function
// a> function calling itself
// b> calling a method
// c> calling the constructors
// d> call and apply


//  returning the array elements  from the functions
// var harley ={
//     name:'street',
//     color:'black',
//     getbudgetforcustom: function(name){
//         return ('very high',
//         console.log(this.name)
//         )

//     },
//     shoutouts :[
//         {
//             kevin:'a cool blck'
//         },
//         {sam:'heavy bike with full power'}
//     ]
// }
// harley.getbudgetforcustom(4000)
// console.log(harley.shoutouts[0])



//  returning the objects from the functions
// var superhero = function(){
//     var power, villain

// }
// peterparker = new superhero;
// peterparker.power = 'airswing';
// peterparker.villain = 'joker'

// superman = new superhero;
// superman.power = 'super'
// superman.villain = 'lex luthor'
// console.log(peterparker)





// function prototyping
var walk = function(){
    return ('he is able to walk')
}

var superhero = function(){
    var power, villain

}

var supervillain = function(){
    var power, villain

}

superhero.prototype.walk = walk;
peterparker = new superhero;
peterparker.power = 'airswing';
peterparker.villain = 'joker'
console.log(peterparker.walk())

superman = new superhero;
superman.power = 'super'
superman.villain = 'lex luthor'
console.log(peterparker)







