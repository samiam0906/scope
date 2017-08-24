// var myName = "Sam";
//
// function myFunc() {
//   var myLocalName = "Fred";
// }

// var a = 'outer';
//
// function myFunction() {
//   var b = 'inner';
//
//   console.log("Inside the func a: " + a); // outer
//   console.log("Inside the func b: " + b); // inner
// }
//
// myFunction();
//
// console.log(a);
// console.log(b);


// var a = 'outer';
//
// function myFunction(a) {
//   console.log(a); // inner
// }
//
// function myFunctionAgain() {
//   var a = 'inner again!'
//   console.log(a); // inner again!
// }
//
// myFunction('inner');
// myFunctionAgain();
//
// console.log(a); // outer


var a = 'outer';

function myFunction() {
  a = 'inner';
  console.log(a); // ???
}

myFunction();

console.log(a); // ???
