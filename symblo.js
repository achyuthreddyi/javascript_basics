let sym1 = Symbol('batman')
let sym2 = Symbol('batman')
console.log(sym1 == sym2 )

let obj = {
    name:'bruce',
    power:'sfsdg',
    [sym1]:2345

} 
console.log(obj)

const M_key = Symbol();
let obj1  = ();
obj[M_key] = 8965