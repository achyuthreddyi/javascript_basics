// console.log(document.getElementById('id'))
// const myelement = document.querySelectorAll('p')
// const myelement = document.querySelectorAll('.class1')
// console.log(myelement)

const mypelement = document.querySelectorAll('p')
// console.log(mypelement)
mypelement.forEach( (p)=>{
    // p.textContent = ' i am changed using js loop'
    // p.remove()

    
})
const mynewpara = document.createElement('p' )
mynewpara.textContent = 'i was added via js'
document.querySelector('body').appendChild(mynewpara)
document.querySelector('button').addEventListener('click',_=>{
    // console.log(event)
    event.target.textContent = 'changed'
})
//  track the input form 
// change will track the changes whenever the change has been made and clicked outside
document.querySelector('#myform').addEventListener('input',(event)=>{
            console.log(event.target.value);
            
})