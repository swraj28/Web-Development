
// Prototype-based Inheritence

let obj1={
  a:10,
  b:20,
  c:30,
}

let obj2=Object.create(obj1)  

obj2.p="abc"
obj2.q="def"
obj2.r="ghi"

let obj3= Object.create(obj2)

// obj2 is a prototype inheritence of obj1. It contains a proto field where the value of obj1 is stored .

/*

    obj2.a-> it will try to find a in obj2
            -> if not found, it will try to find it in obj2.__proto__
            -> if not found
            -> it will try to find it in obj2.__proto__.__proto__
            -> .... and so on ....
            -> till __proto__gets null
*/

/******************************************************** */

// setInterval,setTimeout,clearInterval

var n= 10;

function fun(){
  if(n==0){
    clearInterval(id);
    return;
  }
  console.log(n);
  n-=1;
}

var id= setInterval(fun,1000);


/*************************************************/

let a=[1,2,3,4,5];

let sm=0;

for(let x in a){
  sm+=a[x];
}

console.log(sm);

