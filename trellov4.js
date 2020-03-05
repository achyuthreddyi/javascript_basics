//  

const newtodos = [{ 
    title:'buy bread',
    isDone: false
 }, { 
     title: 'go to gym',
     isdone:false
   }, {   
       title:'record youtube videos',
       isDone:true,
     }]

const index = newtodos.findIndex(function( todo, index){

    return todo.title === 'go to gym'
})
console.log(`the index of the go to gym ${index}`)

// const findtodo = function(mytodos, title){
//     const index = mytodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return mytodos[index]

// } 
// let printme = findtodo(newtodos,'buy bread')
// console.log(printme)

  const findtodo = function(mytodos,title){
      const  titlereturned = mytodos.find((todo,index)=>{
        return todo.title.toLowerCase() === title.toLowerCase()

      })
      return titlereturned
       
  }
  primeme = findtodo(newtodos,'record youtube videos')
  console.log(primeme)