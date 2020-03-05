 let useremail = '  lco123'
 let password = '1234'


 let userchecker = function(mystring){
     if (mystring.includes(123) && mystring.length > 1){
         return true
     }
    return false  
 }
 let passchecker = function(pass){
    if (mystring.includes(123) && mystring.length > 6){
        return true
    }
   return false  
 }

 console.log(userchecker(useremail))