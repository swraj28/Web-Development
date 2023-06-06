

let a=10;
console.log(a);

console.log("Welcome Swraj Kant Sharma");

let b=[1,2,3,4,5];

console.log(b);

function fun(){

  let a=5;
  if(a==5){
    c=10;
    console.log("Inside",c);
  }
  console.log("Outside",c);
}

fun();

console.log("Global",c);

let n=5;

let ans="";

for(let i=1;i<=n;i++){
  for(let j=1;j<=i;j++){
    ans+='* ';
  }
  ans+='\n';
}

console.log(ans);

function recur(x){
  if(x==0)return;

  console.log(x);
  recur(x-1);
}

let a1= "Swraj";
let b1=6;

console.log(typeof(b1));

console.log(a1+b1);
console.log(typeof(a1+b1));

const a2={
  Namme:"Swraj",
  Branch:"COE"
}

a2['friend']="Swraj";
a2['Namme']="swraj";

console.log(a1);

console.log("Hello Swraj Kant Sharma  ")

arr=["Apple","Banana","Mango","Guava"];


console.log(typeof(arr));  
console.log(arr);

function fruit(taste,color){
  this.taste=taste;
  this.color=color;
}

let Apple= new fruit("Sweet","Red");

class Fruit_Class{
  constructor(taste,color){
    this.taste=taste;
    this.color=color;
  }
}

let Mango= new Fruit_Class("Sweet","Yellow");
let Orange= new Fruit_Class("Sour","Orange");

let s="I am Swraj Kant Sharma"

console.log(s.length);

let key="Swraj";

console.log(s.indexOf(key));


//************** *//

let s1='He said ,"This is awesome"! '
console.log(s1);

let s2= "He said, \"This is awesome!\" ";

console.log(s2);

let s3=`He said,"This is awesome!"`

console.log(s3);

let s4="This string is \n in multiple lines"

console.log(s4);

let s5=`
this string is 
in multiple lines.
`

console.log(s5);

let s6=`10+2 =${10+2} `

console.log(s6);

let name="Swraj"

let s7=`Good Morning, ${name}`;
console.log(s7);



