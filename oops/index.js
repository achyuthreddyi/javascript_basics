//  factory method

// function createcircle(radius){
//   return {
//     radius,
//     draw:function(){
//       // console.log(`$[this.radius]`);
//       console.log(radius);
//     }
//   }
//
// }
//
// const circle = createcircle(4)
// circle.draw()

 // constructor function
//
function Circle(radius){
  this.radius = radius;
  let defaultloaction = {x:0, y:0};
  // let compute 

}
const circle = new Circle(3)
circle.locaation = {x:23};
for (let key in circle){
  
  console.log(key,circle[key]);
}



// const Circle1 = new Function('radius',`
// this.radius = radius;
// this.draw = function(){
//   console.log('draw' );
// }`)
//
// const circle = new Circle1(3);
// console.log(another.draw());


// function add(a,b){
//   console.log('this', this);
//   this.a = a;
//   this.b = b;
//   this.c = this.a + this.b
//   console.log((this.c));
// }
// const anc = new  add(2,3)
// console.log((anc));
// console.log(this.c);

//
// let x = {value:10};
// let y = x;
// x.value = 20;
// let number = {value:10};
// function increase(number){
//   number.value++;
// }
// increase(number)
// console.log(number);
