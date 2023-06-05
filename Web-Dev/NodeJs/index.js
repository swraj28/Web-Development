

console.log('Hello World !');

// Adding Two numbers by taking input from the user:- 

function add (a,b){
  return (a+b);
}

console.log(process.argv);

var args= process.argv.slice(2);

console.log(args);

console.log('Adding Two Numbers: ',add(parseInt(args[0]),parseInt(args[1])));