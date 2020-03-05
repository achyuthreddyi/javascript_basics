  var john = {
      name: ' i am john',
      age : 24,
      isActive:true
  }
  var marry = {
      name : ' iam marry',
      age: 23,
      isActive : true

  }
  var sam = {
      name:' i am  sam',
      age: 29,
      isActive: true
  }

  let users = new Map()
  users.set('john1', john)
  users.set('marry', marry)
  users.set('sam', sam)
console.log(users.get('john1'))

  console.log(users.size)
  console.log(users.get('sam'))
  console.log(users.keys())

  for (const key of users.keys()) {
      console.log(key);
      
  }
  for (const [key,value] of users.entries()) {
      console.log(key + ' '+ value.name)
      
  }
  users.forEach((value,key)=> console.log(key +' '+' '+ value.name))

 var arrofarr =[['one','1'],['two','2'],['three','3']]
 var newMap = new Map(arrofarr)
 console.log(newMap)

// var number = [100,200,300,400]
// const map1 = number.map(num => num/200)
// console.log(map1)
// console.log(map1[0])
// const m = new Map()
// m.set('a',map1)
// console.log(m['a'])
// console.log(m)
// console.log(m.get('a'))