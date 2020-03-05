function myvalidation(){
    // let myvalue = document.querySelector('#myform')
    let myvalue = document.getElementById('myform').value;
    // console.log(myvalue);
    if (isNaN(myvalue)|| myvalue<1 || myvalue >20){
        console.log();
        const mynewpara = document.createElement('p' )
        mynewpara.textContent = 'i am not a valid number'
        document.querySelector('body').appendChild(mynewpara)
        
    }
    else{
        const mynewpara = document.createElement('p' )
        mynewpara.textContent = 'it is cool'
        document.querySelector('body').appendChild(mynewpara)

    } 

}


// function myvalidation2(){
//     // let myvalue2 = document.getElementById('myform1').value;
//     let myvalue2 = document.getElementsByClassName('myform1').value;

    
//     console.log(myvalue2)
// }

document.querySelector('.myform1').addEventListener('submit',(event)=>{
    console.log(event.target.username.value)
    console.log(event.target.realname.value)


})