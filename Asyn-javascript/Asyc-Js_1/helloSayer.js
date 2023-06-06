
function hellosayer(times,name){

  let count=0;
  let loopId=setInterval(()=>{
    count++;
    console.log("Hello "+name);
    if(count===times){
      clearInterval(loopId);
    }
  },100)
}

// Javascript uses single thread. Two javascript tasks cannot be run concurrently. But here it appears that the tasks are running concureently as the time is being divided among the functions .

// To remove concureency we use callbacks.

hellosayer(3,'Swraj');
hellosayer(3,'Prakash');

module.exports={
  hellosayer
}