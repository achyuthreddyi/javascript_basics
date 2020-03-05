a =[[1,2,3],[4,5,6],[7,8,9]]
b = new Array()

// reducer = (accumulator,current) => accumulator + (current)

// b = a.reduce(reducer)
// console.log(b)


reducer = (accumulator,current) => accumulator.sum(current)

b = a.reduce(reducer)
console.log(b)

