 function makeAdder(x) {      
      console.log('here',x,add5)
    return function(y) {
      // var x = 4;
      return x + y;
      console.log(x)
    }
    console.log(x)
  } 

  console.log(makeAdder)
  var add5 = makeAdder(5);
  const add10 = makeAdder(10);
  console.log(add5)
  console.log(add5(1))
  console.log(add10(2))