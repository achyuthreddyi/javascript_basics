
function multiplier(factor){
    console.log(a)
    // return 5
  return number => number * factor
}
var a = multiplier(2)
console.log(a)
console.log(a(4))

// when called the function body sees the en]vironment in which it was created not in which it was called
// multipler is called and creates an environment in which its factors parameter is bound to 2
// the function value it returns which is stored in twice remembers the environment 