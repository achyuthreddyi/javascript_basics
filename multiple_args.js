var multiplier = function(){return
    var result =0;
    for(var i =arguments.length;i>0;i--){
        result += arguments[i];
    }
    return result;
}

console.log(multiplier(2,3))