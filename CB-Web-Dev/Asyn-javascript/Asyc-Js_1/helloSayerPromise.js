
function hellosayer(times,name){

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

// Concurrently:- Here we are not returning the promise .

hellosayer(3,'Swraj')
  .then(hellosayer(3,'Prakash'))
  .then(hellosayer(3,'Mohit'))

  
// Sequentially 
hellosayer(3,'Swraj')
  .then(()=> hellosayer(3,'Prakash'))
  .then(()=> hellosayer(3,'Mohit'))

module.exports={
  hellosayer
}