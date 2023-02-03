
function hellosayer(times,name){

  console.log(Date.now());

  return new Promise((resolve,reject)=>{
    let count=0;
    let loopId=setInterval(()=>{
      count++;
      console.log("Hello "+name);
      if(count===times){
        clearInterval(loopId);
        resolve();
      }
    },100)
  })
}

async function task(){
  await hellosayer(3,'Swraj')
  await hellosayer(3,'Prakash')
  await hellosayer(3,'Mohit')
}
task()

console.log('Hello World! ',Date.now()) ;

function add(a,b){
  return (a+b)
}

console.log(add(3,4),Date.now())

// Sequentially 
// hellosayer(3,'Swraj')
//   .then(()=> hellosayer(3,'Prakash'))
//   .then(()=> hellosayer(3,'Mohit'))

// module.exports={
//   hellosayer
// }