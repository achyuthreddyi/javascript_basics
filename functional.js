let score = 456;
function addbonus(){
    score = score +45;
    return score
}


//  in functional programming way
//  keeping data and the functions separate

function addbonus(score){
    return score +45;
}

//  state change

hitesh = 'hey'
hitesh = ' hey there'
hitesh = ' hey there everyone'
//  in functional programming pattern we do not change the variables much often
//  to trace back 
hitesh = 'hey'
hitesh12 = ' hey there'
hitesh123 = ' hey there everyone'


//  functions are treated as first class
const h =45;
const name = 'hitesh'
const addscore = function(){ ... ...}


