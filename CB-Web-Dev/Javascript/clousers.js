

// Clousers in JavaScript:- 

// https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/

// function outer(arg1){

//   let var1=10;

//   function inner(arg2){
//     let var2=20;

//     console.log(arg1,var1,arg2,var2);
//     console.log(arguments);
//   }

//   return inner;
// }

// let x=outer('param1');

// x('parm2');

// console.log(typeof(x));

//**************************************************************************** *//

// function numberGenerator() {
//   // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() { 
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// }

// var number = numberGenerator();  // number is the checkNumber function 

// number(); // 2

//**************************************************************************** *//


// function fun(){
//   var x=10;

//   function foo(){
//     var y=20;
//     function bar(){
//       var z=30;
//       var output=x+y+z;
//       console.log(output);
//     }
//     return bar;
//   }
//   return foo;
// }

// var a= fun();  // it would have returned foo function 

// var b=a();
// b();

//**************************************************************************** *//


var x = 10;

function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure  
/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack (see the screenshot below)
*/
moar(15);